import { Component } from '@angular/core';
import { LocalStorageServiceService } from '../local-storage-service.service';
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-cookie-consent',
  imports: [],
  animations: [
    trigger('fadeInOut', [
      state('enter', style({ height: '*', opacity: 1 })), // Initial state when appearing
      state('leave', style({ height: 0, opacity: 0 })), // State when disappearing
      transition('enter => leave', [animate('0.3s')]),
      transition('leave => enter', [animate('0.3s')]),
      transition('* => enter', [animate('0.1s')]),
    ]),
  ],
  templateUrl: './cookie-consent.component.html',
  styleUrl: './cookie-consent.component.css',
})
export class CookieConsentComponent {
  isCookieConsentAccepted: boolean | null = null;

  constructor(
    private readonly localStorageService: LocalStorageServiceService
  ) {}

  ngOnInit(): void {
    const cookieConsent = !!this.localStorageService.getValue('cookie-consent');
    this.isCookieConsentAccepted = cookieConsent;
  }

  acceptCookies(): void {
    this.localStorageService.setItem('cookie-consent', 'accepted');
    this.isCookieConsentAccepted = true;
  }

  resetCookies(): void {
    this.localStorageService.setItem('cookie-consent', '');
    this.isCookieConsentAccepted = false;
  }

  get cookieConsentState(): 'enter' | 'leave' | 'hidden' {
    if (this.isCookieConsentAccepted === null) {
      return 'hidden';
    } else if (!this.isCookieConsentAccepted) {
      return 'enter';
    } else {
      return 'leave';
    }
  }
}

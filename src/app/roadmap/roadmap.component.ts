import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-roadmap',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './roadmap.component.html',
  styleUrl: './roadmap.component.css',
})
export class RoadmapComponent {
  constructor(private readonly router: Router) {}

  get getCurrentRoute(): string {
    return this.router.url;
  }
}

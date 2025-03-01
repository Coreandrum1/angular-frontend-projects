import { Routes } from '@angular/router';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { CounterComponent } from './counter/counter.component';
import { CookieConsentComponent } from './cookie-consent/cookie-consent.component';
import { WeatherToolComponent } from './weather-tool/weather-tool.component';

export const routes: Routes = [
  {
    path: 'activities',
    component: RoadmapComponent,
    children: [
      { path: 'counter', component: CounterComponent },
      {
        path: 'cookie-consent',
        component: CookieConsentComponent,
      },
      {
        path: 'weather-tool',
        component: WeatherToolComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'activities',
  },
];

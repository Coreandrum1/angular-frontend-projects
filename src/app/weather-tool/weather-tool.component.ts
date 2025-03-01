import { Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-weather-tool',
  imports: [],
  templateUrl: './weather-tool.component.html',
  styleUrl: './weather-tool.component.css',
})
export class WeatherToolComponent {
  constructor() {
    console.log(environment.weatherURL, 'hola');
  }
}

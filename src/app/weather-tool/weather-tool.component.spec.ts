import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherToolComponent } from './weather-tool.component';

describe('WeatherToolComponent', () => {
  let component: WeatherToolComponent;
  let fixture: ComponentFixture<WeatherToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

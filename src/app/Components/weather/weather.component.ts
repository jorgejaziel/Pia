import { Component, OnInit } from '@angular/core';
import TypeModels from '../../TypeModels/Models';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  WeatherData: TypeModels.IDataResponse;

  constructor() { }

  ngOnInit() {
    this.WeatherData = <TypeModels.IDataResponse>{};
    this.getWeatherData();
  }
  getWeatherData()
  {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Monterrey,mx&appid=5c93f17784ceb1f43793af5885f56a88&units=metric')
    .then(response => response.json())
    .then(data => {
        this.WeatherData.temp_celsius = (data.main.temp).toFixed(0);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ApixuService} from "../apixu.service";
import {log} from "util";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherSearchForm = new FormControl();
  weatherData: any;
  showTemp = true;
  direction;

  constructor( private formBuilder: FormBuilder,
               private apixuService: ApixuService) {
    this.getWeatherData('hanoi');
  }

  ngOnInit(): void {
    this.weatherSearchForm.valueChanges.subscribe(location => {this.getWeatherData(location)});
  }

  getWeatherData(location){
    this.apixuService.getWeather(location).subscribe(data => {this.weatherData = data;
      this.direction = this.toTextualDescription(this.weatherData.wind.deg);
    });
  }

  toggleCF(){
    this.showTemp = !this.showTemp;
  }
  toTextualDescription(degree){
    if (degree>337.5) return 'N';
    if (degree>292.5) return 'N-W';
    if(degree>247.5) return 'W';
    if(degree>202.5) return 'S-W';
    if(degree>157.5) return 'S';
    if(degree>122.5) return 'S-E';
    if(degree>67.5) return 'E';
    if(degree>22.5){return 'N-E';}
    return 'N';
  }

}

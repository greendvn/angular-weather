import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=b5e06ea98123c65ce92023e50fdf23c2');
  }
}

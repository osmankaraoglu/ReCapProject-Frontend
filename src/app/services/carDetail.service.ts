import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarDetailResponseModel } from '../models/carDetailResesponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = 'https://localhost:44384/api/Cars/getcardetails';

  constructor(private httpClient : HttpClient) { }

  getCarDetails() : Observable < CarDetailResponseModel> {
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl);
  }
}

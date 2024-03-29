import { Component, OnInit } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService} from 'src/app/services/carDetail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  carDetails : CarDetail[] = [];
  dataLoaded = false;
  constructor(private carDetailService : CarDetailService) { }

  ngOnInit(): void {
    this.getCarDetails();
  }

  getCarDetails(){
    this.carDetailService.getCarDetails().subscribe(response =>{
      this.carDetails = response.data;
      this.dataLoaded = true;
    });
  }

}

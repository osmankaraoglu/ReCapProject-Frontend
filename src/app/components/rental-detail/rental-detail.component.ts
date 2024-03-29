import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { RentalDetailService } from 'src/app/services/rentalDetail.service';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
})
export class RentalDetailComponent implements OnInit {
  rentalDetails : RentalDetail[] = [];
  dataLoaded = false;
  constructor(private rentalDetailService : RentalDetailService) { }

  ngOnInit(): void {
    this.getRentalDetails();
  }

  getRentalDetails(){
    this.rentalDetailService.getRentalDetails().subscribe(response =>{
      this.rentalDetails = response.data;
      this.dataLoaded = true;
    });
  }

}

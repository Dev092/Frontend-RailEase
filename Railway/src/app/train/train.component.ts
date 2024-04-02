import { Component, OnInit } from '@angular/core';
import { TrainServiceService } from '../train-service.service';
import { Train } from '../train'
import { Router } from '@angular/router';
@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrl: './train.component.css'
})
export class TrainComponent implements OnInit{
  trains: Train[]=[];
  constructor(private trainService:TrainServiceService, private router : Router){}
  ngOnInit(): void {
    this.getTrain();
  }
  private getTrain(){
    this.trainService.getTrainBookingList().subscribe(data => {
      this.trains=data;
    })
  }
  onClick(id:any) {
    this.trainService.setSeatNumber(id);
    this.router.navigate(['/view-ticket']);
  }


}

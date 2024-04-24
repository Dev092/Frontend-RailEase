import { Component, OnInit } from '@angular/core';
import { TrainServiceService } from '../train-service.service';
import { Train } from '../train'
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrl: './train.component.css',
  providers: [DatePipe]

})
export class TrainComponent implements OnInit{
  trains: Train[]=[];
  constructor(private trainService:TrainServiceService, private router : Router, private datePipe: DatePipe){}
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


  format(date?:Date) : string {
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
  
}

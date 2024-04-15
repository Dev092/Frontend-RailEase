import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { TrainServiceService } from '../train-service.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrl: './book-ticket.component.css'
})
export class BookTicketComponent {

  train: Train = new Train()
  constructor(private trainService: TrainServiceService, 
       private router: Router){

  }
  
  onSubmit() {
    this.trainService.setTrain(this.train);
    this.router.navigate(['/trainInfo']);
  }

  sended(): void {
    alert('Thank you we will get back to you soon!');
  }
 

  // saveJourney(){
  //   this.trainService.createJourney(this.train).subscribe(data =>{
  //     console.log(data);
  //     this.goToTrain();
  //   },
  //   error => console.log(error));
  // }

  // goToTrain(){
  //    this.router.navigate(['/trains']);
  // }

  //  onSubmit(){
  //   console.log(this.train);
  //   this.router.navigate(['/payment']);
  // }

  
  
 

}

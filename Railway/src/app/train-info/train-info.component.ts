// import { Component, OnInit } from '@angular/core';
// import { Train } from '../train';
// import { TrainServiceService } from '../train-service.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-train-info',
//   templateUrl: './train-info.component.html',
//   styleUrls: ['./train-info.component.css']
// })
// export class TrainInfoComponent implements OnInit {
//   trainNames: string[] = ['Shatabdi Express', 'Rajdhani Express', 'Rani Express', 'Gatimaan Express', 'Garib Rath Express'];
//   train: Train = new Train();
//   trainno: any = 0;
//   trainname: any = 'provide data';

//   constructor(private trainService: TrainServiceService, private router: Router) {
//     this.generateRandomTrainInfo();
//     this.setRandomTrainInfo();
//   }

//   ngOnInit(): void {
//     this.train = this.trainService.getTrain();
//     // this.updateTrainInfo();
//   }

//   setRandomTrainInfo(){
//     this.train.trainNumber=this.trainno;
//     this.train.trainName=this.trainname;
//   }

//   generateRandomTrainInfo() {
//     this.trainno = Math.floor(Math.random() * 1000) + 1;
//     const randomIndex = Math.floor(Math.random() * this.trainNames.length);
//     this.trainname = this.trainNames[randomIndex];
//     this.setRandomTrainInfo();
//     // this.updateTrainInfo();
//   }

//   updateTrainInfo() {
//     this.trainname = this.train.trainName;
//     this.trainno = this.train.trainNumber;
//   }

//   onSubmit() {
//     this.trainService.setTrain(this.train);
//     this.router.navigate(['/payment']);
//   }

// }

import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { TrainServiceService } from '../train-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-train-info',
  templateUrl: './train-info.component.html',
  styleUrls: ['./train-info.component.css']
})
export class TrainInfoComponent implements OnInit {
  trainNames: string[] = ['Shatabdi Express', 'Rajdhani Express', 'Rani Express', 'Gatimaan Express', 'Garib Rath Express'];
  train: Train = new Train();

  constructor(private trainService: TrainServiceService, private router: Router) {}

  ngOnInit(): void {
    this.train = this.trainService.getTrain();
    this.generateRandomTrainInfo();
  }

  generateRandomTrainInfo() {
    // Generate random train number (between 1 and 1000)
    this.train.trainNumber = Math.floor(Math.random() * 1000) + 1;

    // Choose a random train name from the predefined list
    const randomIndex = Math.floor(Math.random() * this.trainNames.length);
    this.train.trainName = this.trainNames[randomIndex];
  }

  onSubmit() {
    // Save the train information to the service and navigate to payment page
    this.trainService.setTrain(this.train);
    this.router.navigate(['/payment']);
  }
}


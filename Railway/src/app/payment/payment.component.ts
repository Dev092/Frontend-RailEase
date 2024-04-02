import { Component, OnInit } from '@angular/core';
import { TrainServiceService } from '../train-service.service';
import { Router } from '@angular/router';
import { Train } from '../train';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{
  train:Train=new Train();
  constructor(private trainService: TrainServiceService, private router: Router) {}

    ngOnInit(): void {
      this.train=this.trainService.getTrain();
      }


      saveJourney(){
        this.trainService.createJourney(this.train).subscribe(data =>{
          alert('Payment done!');
          this.router.navigate(['/trains']);
        },
        error => console.log(error));
      }

      onPayment(){
        this.saveJourney();
        
      }  
}

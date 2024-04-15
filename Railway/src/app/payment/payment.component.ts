import { Component, OnInit } from '@angular/core';
import { TrainServiceService } from '../train-service.service';
import { Router } from '@angular/router';
import { Train } from '../train';
import { Payment } from '../payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  amount?: number;
  payment: Payment = new Payment();
  train: Train = new Train();

  constructor(private trainService: TrainServiceService, private router: Router) {
    this.generateAmount();
    this.setPaymentAmount(); // Call the method to set payment amount
  }

  ngOnInit(): void {
    this.train = this.trainService.getTrain();
  }

  goBack(): void {
    this.router.navigate(['/trainInfo']);
  }

  saveJourney() {
    this.payment.seatNumber = this.train.seatNumber;
    this.trainService.createJourney(this.train).subscribe(data => {
      alert('Payment done!');
      this.router.navigate(['/trains']);
    }, error => console.log(error));
  }

  onPayment() {
    this.trainService.setTrain(this.train);
    this.RecivePayment();
    this.saveJourney();
  }

  generateAmount() {
    this.amount = Math.floor(Math.random() * 1000);
  }

  setPaymentAmount() {
    this.payment.payAmount = this.amount; // Assign amount to payment.payAmount
  }

  RecivePayment() {
    this.trainService.makePayment(this.payment).subscribe(data => {
      console.log(data);
    }, error => console.log(error));
  }
}

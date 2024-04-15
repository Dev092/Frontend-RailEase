import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { TrainServiceService } from '../train-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css'
})
export class TransactionHistoryComponent implements OnInit{
  payment:Payment[]= [];
  constructor(private trainService:TrainServiceService, private router: Router){}
  ngOnInit(): void {
    this.getHistory();
  }
  private getHistory(){
    this.trainService.getTransactionHistory().subscribe(data => {
      this.payment=data;
    })
  }
}

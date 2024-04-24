import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainComponent } from './train/train.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { PaymentComponent } from './payment/payment.component';
import { TrainInfoComponent } from './train-info/train-info.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path: 'trains', component: TrainComponent},
  {path: 'book-ticket', component: BookTicketComponent},
  {path: 'view-ticket', component: ViewTicketComponent},
  {path: '', redirectTo: 'book-ticket', pathMatch: 'full'},
  {path: 'payment', component: PaymentComponent },
  {path: 'trainInfo', component: TrainInfoComponent},
  {path: 'transactionHistory', component: TransactionHistoryComponent},
  {path: 'aboutus', component: AboutUsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

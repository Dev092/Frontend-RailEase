import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainComponent } from './train/train.component';
import { HttpClientModule } from '@angular/common/http';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { FormsModule } from '@angular/forms';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { PaymentComponent } from './payment/payment.component';
import { TrainInfoComponent } from './train-info/train-info.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainComponent,
    BookTicketComponent,
    ViewTicketComponent,
    PaymentComponent,
    TrainInfoComponent,
    TransactionHistoryComponent,
    AboutUsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

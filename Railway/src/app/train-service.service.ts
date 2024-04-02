import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Train } from './train';


@Injectable({
  providedIn: 'root'
})
export class TrainServiceService {
  private train= new Train();
  private seatNumber : any;

  private baseURL="http://localhost:8080/api/v1/trains";
  constructor(private httpClient: HttpClient) { }

  getTrainBookingList():Observable<Train[]>{
    return this.httpClient.get<Train[]>(`${this.baseURL}`);
  }

  createJourney(train: Train): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,train);
  }

  getTrainBooking(id:number):Observable<Train>{
    return this.httpClient.get<Train>(`http://localhost:8080/api/v1/train/${id}`);
  }

  getSeatNumber() : any{
    return this.seatNumber;
  }
  setSeatNumber(seatNumber: any): void {
    this.seatNumber = seatNumber;
  }
  getTrain():any{
    return this.train;
      
  }
  setTrain(train:Train):any{
    this.train=train;
  }
}

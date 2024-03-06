import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  totalPrice : number = 0;
  totalSeats : number = 0;
  selectedSeats : String[]=[]
  constructor() { }



  bookTicket(seats : String[], price : number){
    this.totalSeats  = seats.length
    this.totalPrice = this.totalSeats*price
    this.selectedSeats = seats
  }

  getTicket(){
    return {
      price : this.totalPrice,
      seats: this.totalSeats,
      selectSeats: this.selectedSeats
    }
  }
}

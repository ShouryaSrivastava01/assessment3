import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrl: './seat-selection.component.css'
})
export class SeatSelectionComponent implements OnInit{
  error:string = null
  seat;
  constructor(
    private movieService : MoviesService,
    private route: ActivatedRoute,
    private ticket: TicketService,
    private router: Router
  ){}

  rows: string []=['A','B','C','D', 'E', 'F']
  columns : number[]=[1,2,3,4,5]
  selectedSeats: string[]=[]
  bookedSeats : string[]
  movieId:number
  showId:number


  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const id = params.get('id')
      const idx = params.get('idx')
      const movie = this.movieService.getMovieById(parseInt(id))
      console.log(movie.seats[parseInt(idx)])
      this.bookedSeats = movie.seats[parseInt(idx)]

      this.movieId = parseInt(id)
      this.showId = parseInt(idx)
    })
    
  }

  toggleSeat(row:string, col:string){
    if(this.bookedSeats.includes(`${row}${col}`)) return
    const seat = `${row}${col}`;
    const index = this.selectedSeats.indexOf(seat)
    if(index == -1){
      this.selectedSeats.push(seat)
    }else{
      this.selectedSeats.splice(index,1)
    }

  }
  isBooked(row:string,col:string){
    if(!this.bookedSeats) return false
    return this.bookedSeats.includes(`${row}${col}`)
  }
  isSeatSelected(row:string, col:string){
    return this.selectedSeats.includes(`${row}${col}`)
  }

  book(){
    if(this.selectedSeats.length===0) {
        alert("No Seat Selected")
        return 
    }
    this.ticket.bookTicket(this.selectedSeats, 434)
    this.router.navigate(['booking',this.movieId,this.showId ],)
    console.log(this.selectedSeats)

  }

 
}

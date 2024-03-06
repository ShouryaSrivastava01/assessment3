import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {
  booking:any
  movie:any
  movieId
  showId:number
  constructor(
    private route: ActivatedRoute,
    private movieService: MoviesService,
    private ticket : TicketService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.booking = this.ticket.getTicket()
    console.log(this.booking)
    this.route.paramMap.subscribe(params=>{
      const id = params.get('id')
      this.showId = parseInt(params.get('idx'))
      this.movie = this.movieService.getMovieById(parseInt(id))

      this.movieId = parseInt(id)
    })
  }

  confirm(){
    
    
    this.movieService.bookSeat(this.ticket.selectedSeats,this.movieId,this.showId)
    this.router.navigate([''])
    
    
  }

}

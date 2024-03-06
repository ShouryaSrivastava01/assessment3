import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrl: './showtimes.component.css'
})
export class ShowtimesComponent {

  movie:any
  showTimes: any

  constructor(
    private movieService : MoviesService,
    private route : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const id = params.get('id')
      this.movie= this.movieService.getMovieById(parseInt(id))
      this.showTimes = this.movie.showtimes
      console.log(this.showTimes)
    })
  }
}

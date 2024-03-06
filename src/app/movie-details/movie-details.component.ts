import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {
  movie:any

  constructor(
    private movieService : MoviesService,
    private route : ActivatedRoute,
    private auth:AuthService,
    private router: Router

    ){}

    ngOnInit(): void {
      this.route.paramMap.subscribe(params=>{
        const id = params.get('id')
        this.movie = this.movieService.getMovieById(parseInt(id))
        console.log(this.movie)
      })
    }

    isAdmin(){
      return this.auth.isAdmin()
    }

    delete(id:number){
      this.movieService.deleteMovie(id)
      this.router.navigate([''])

    }
}

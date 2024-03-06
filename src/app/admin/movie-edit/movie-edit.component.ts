import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationService } from '../../validation.service';


@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrl: './movie-edit.component.css'
})
export class MovieEditComponent implements OnInit {
  error:string = null
  movie: any={
    id:0, 
      title: '',
      description:'',
      posterUrl:'',
      trailerUrl:'',
  }
  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private validation: ValidationService,
    private router: Router
  ){}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{
      const id = params.get('id')
      const idx = params.get('idx')
      this.movie = this.movieService.getMovieById(parseInt(id))
    
  })
}

onSubmit(){
  if(!this.validation.validate(this.movie.title)){
    this.error="Invalid title Format"
    return false
  }
  if(!this.validation.validate(this.movie.description)){
    this.error="Invalid Description Format"
    return false
  }
  
    this.movieService.updateUser(this.movie)
    this.router.navigate([''])
}


closeErr(){
  this.error = null
}
}

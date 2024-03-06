import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MoviesService } from '../../movies.service';
import { ValidationService } from '../../validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css'
})
export class MovieFormComponent {
  error:string = null
  movie={
    id:1, 
    title: 'Movie 1',
    description:'Description of Movie 1',
    posterUrl:'',
    trailerUrl:'',
    showtimes:[
      '8AM', '12PM', '3PM'
    ],
    seats:[['A1','B2'],
      [],
      []
  ]
  }

  constructor(
    private movieService : MoviesService,
    private validation: ValidationService,
    private router: Router
  ){}

  onSubmit(form: NgForm){
    this.movie={
      id:this.generateId(),
      title: form.value.title,
      description: form.value.description,
      posterUrl: form.value.poster,
      trailerUrl:form.value.trailer,
      showtimes:[],
      seats:[]
    }
    if(!this.validation.validate(this.movie.title)){
      this.error="Invalid title Format"
      return false
    }
    if(!this.validation.validate(this.movie.description)){
      this.error="Invalid Description Format"
      return false
    }

    this.movieService.addMovie(this.movie)
    this.router.navigate([''])


  }



  private generateId():number{
    return Math.floor(Math.random()*1000)+1
  }


  closeErr(){
    this.error = null
  }
}

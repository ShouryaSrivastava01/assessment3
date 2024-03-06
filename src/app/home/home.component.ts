import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  movies;
  constructor(private moviesService: MoviesService){

  }

  ngOnInit(): void {
    this.movies = this.moviesService.getMovies()
  }
}

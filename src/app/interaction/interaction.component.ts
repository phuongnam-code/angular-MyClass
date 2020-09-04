import { MovieListComponent } from './movie-list/movie-list.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {
  @ViewChild(MovieListComponent)
  movieListComponent: MovieListComponent
  constructor() { }

  ngOnInit(): void {
  }
  xuLyThemPhim(phim: any) {
    this.movieListComponent.dsPhim.push(phim)
    console.log(this.movieListComponent.dsPhim)
  }
}

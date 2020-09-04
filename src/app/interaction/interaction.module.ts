import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { AddMovieComponent } from './add-movie/add-movie.component';



@NgModule({
  declarations: [InteractionComponent, MovieComponent, MovieListComponent, AddMovieComponent],
  imports: [
    CommonModule
  ], exports: [InteractionComponent]
})
export class InteractionModule { }

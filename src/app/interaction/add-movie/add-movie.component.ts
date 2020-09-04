import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Output() themPhim = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  xuLyThemPhim(tenPhim: string, giaPhim: number, hinhAnh: string, moTa: string) {
    this.themPhim.emit({ tenPhim, giaPhim, hinhAnh, moTa })
  }
}

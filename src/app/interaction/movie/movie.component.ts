import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() chiTietPhim: any
  @Output() chonPhim = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  xemChiTiet() {
    this.chonPhim.emit(this.chiTietPhim)
  }
}

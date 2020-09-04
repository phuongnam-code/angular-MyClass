import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap6',
  templateUrl: './baitap6.component.html',
  styleUrls: ['./baitap6.component.css']
})
export class Baitap6Component implements OnInit {
  dsSanPham: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  themSanPham(maSP: string, tenSP: string, giaSP: number) {
    this.dsSanPham.push({ maSP, tenSP, giaSP })
    console.log(this.dsSanPham);
  }
}

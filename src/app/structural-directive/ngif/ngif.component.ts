import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  status: boolean = true;
  constructor() { }
  logout() {
    this.status = false;
  }
  ngOnInit(): void {
  }

}

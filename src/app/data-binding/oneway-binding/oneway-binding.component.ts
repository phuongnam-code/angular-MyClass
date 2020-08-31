import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway-binding',
  templateUrl: './oneway-binding.component.html',
  styleUrls: ['./oneway-binding.component.css']
})
export class OnewayBindingComponent implements OnInit {
  username: string = 'Phương Nam';
  constructor() { }

  eventBinding(value) {
    console.log(value)
  }
  ngOnInit(): void {
  }

}

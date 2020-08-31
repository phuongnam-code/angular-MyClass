import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  listFriend: any = [
    { name: 'hào', age: 25 },
    { name: 'hưng', age: 27 },
    { name: 'phong', age: 27 },
    { name: 'kiên', age: 27 },
    { name: 'thành', age: 27 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activ4',
  templateUrl: './activ4.page.html',
  styleUrls: ['./activ4.page.scss'],
})
export class Activ4Page implements OnInit {
  policies: any = [
      {id: 0, name: "policy001"},
     {id: 2, name: "policy002"},
     {id: 3, name: "policy003"},
     {id: 4, name: "policy004"},
     {id: 5, name: "policy005"}, 
];
  constructor() { }
  ngOnInit() {
  }

}

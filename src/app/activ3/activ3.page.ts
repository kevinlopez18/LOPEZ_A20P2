import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activ3',
  templateUrl: './activ3.page.html',
  styleUrls: ['./activ3.page.scss'],
})
export class Activ3Page implements OnInit {
  nota:number;
  asignatura:string;
  edad:number;
  constructor() {
    this.asignatura="matematicas";
    this.nota=5;
    this.edad=16;
  }

  ngOnInit() {
  } 

}

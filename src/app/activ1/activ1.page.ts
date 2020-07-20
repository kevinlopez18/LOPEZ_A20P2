import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activ1',
  templateUrl: './activ1.page.html',
  styleUrls: ['./activ1.page.scss'],
})
export class Activ1Page implements OnInit {
  name = 'Interpolación';
  img = 'https://thecatapi.com/api/images/get?format=src&type=gif?results_per_page=';
  constructor() { }

  ngOnInit() {
  }

}

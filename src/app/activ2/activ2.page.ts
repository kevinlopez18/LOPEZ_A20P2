import { Component, OnInit } from '@angular/core';
import { PersonaPage } from '../persona/persona.page';

@Component({
  selector: 'app-activ2',
  templateUrl: './activ2.page.html',
  styleUrls: ['./activ2.page.scss'],
})
export class Activ2Page implements OnInit {
  persona:PersonaPage;

  constructor() {
    
    this.persona= new PersonaPage();
    this.persona.nombre="gema";
    this.persona.edad=20;
   }
   ngOnInit() {
   }
 }

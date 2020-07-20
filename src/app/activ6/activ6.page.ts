import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activ6',
  templateUrl: './activ6.page.html',
  styleUrls: ['./activ6.page.scss'],
})
export class Activ6Page implements OnInit {
  nombre:string = "kevin";
  LibroTile:string = "comedia";
  collection: string[] = ['a', 'b', 'c', 'd'];
  PI: number = 6.17;
  porcentPipe: number = 0.4;
  money: number = 0.459;
 
  valorDePromesa = new Promise( (resolve, reject) => {
    setTimeout( () => resolve('LLego la data!'), 3500 );
  } );
  fecha:Date = new Date();
  heroe = {
    Apellido: "Lopez",
    Casado: "no",
    Edad: 20,
    Direccion: "Riobamba",
    Nombre:"Kevin",
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonButton,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem,  IonLabel,  IonList,  IonThumbnail} from '@ionic/angular/standalone';
@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.scss'],
  imports:[IonButton,CommonModule,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem,  IonLabel,  IonList,  IonThumbnail]
})
export class ListaProductoComponent  implements OnInit {
  activo: boolean= true;
  usuario: string="";
  direccion: string="";
  pais: string="";
  ciudad: string="";
  idioma: string="";
  moneda: string="";

  listaObjeto =[
    {
      id: 1,
      title: "Arroz",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com"   

    },
    {
      id: 2,
      title: "Lenteja",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com"     
    },
    {
      id: 3,
      title: "string",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com"     
    },
    {
      id: 4,
      title: "Papa",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com"     
    },
    {
      id: 5,
      title: "Agiuacate",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com"     
    },
    {
      id: 6,
      title: "Platano",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com"     
    },
    {
      id: 7,
      title: "Cafe",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com"     
    },
    {
      id: 8,
      title: "Frijoles",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com"     
    },
    {
      id: 9,
      title: "Carne res",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com"     
    },
    {
      id: 10,
      title: "Carne cerdo",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com"     
    },
    {
      id: 11,
      title: "Pollo",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://example.com"     
    }
  ]
  constructor() { }

  ngOnInit() {}

  inactivar(){
    this.activo = !this.activo;
  }
}

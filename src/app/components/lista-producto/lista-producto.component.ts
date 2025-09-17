import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonButton,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem,  IonLabel,  IonList,  IonThumbnail,IonAvatar} from '@ionic/angular/standalone';
import { Producto } from 'src/app/data/interfaces/producto.model';
@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.scss'],
  imports:[IonButton,CommonModule,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem,  IonLabel,  IonList,  IonThumbnail,IonAvatar]
})
export class ListaProductoComponent  implements OnInit {
  producto: Producto;
  activo: boolean= false;
  usuario: string="";
  direccion: string="";
  pais: string="";
  ciudad: string="";
  idioma: string="";
  moneda: string="";

  @Input() listaObjeto:Producto[] =[
  ]
  constructor() { }

  ngOnInit() {}
  inactivar(){
    this.activo = !this.activo;
  }

}

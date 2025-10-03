import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() listaObjeto:Producto[] =[]
  @Input() modo: 'tienda' | 'carrito' = 'tienda'
  @Output() productoAccion = new EventEmitter<Producto>(); // 👈 evento para avisar al padre


  constructor() { }

  ngOnInit() {}
  inactivar(){
    this.activo = !this.activo;
  }
  ejecutarAccion(producto: Producto) {
    this.productoAccion.emit(producto);
  }
}

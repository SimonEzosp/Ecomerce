import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonButton,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem,  IonLabel,  IonList,  IonThumbnail,IonAvatar} from '@ionic/angular/standalone';
import { Producto } from 'src/app/data/interfaces/producto.model';
import { ServicioProducto } from 'src/app/data/services/servicio-producto';
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
  serviceProduct = inject(ServicioProducto)
  @Input() listaObjeto:Producto[] =[]
  @Input() modo: 'tienda' | 'carrito' = 'tienda'
  @Output() productoAccion = new EventEmitter<Producto>(); // 👈 evento para avisar al padre
  @Output() productosCargados = new EventEmitter<Producto[]>();

  constructor() { }

  ngOnInit() {
    if (this.modo === 'tienda') {
      this.taerGet();
    } else if (this.modo === 'carrito') {
      this.listaObjeto = this.serviceProduct.obtenerCarrito();
    }
    
  }
  inactivar(){
    this.activo = !this.activo;
  }
  ejecutarAccion(producto: Producto) {
    this.productoAccion.emit(producto);
  }

  taerGet(){
    this.serviceProduct.getAPI().subscribe({
      next:(data:Producto[])=>{
        console.log(data)
        this.listaObjeto = [...data, ...this.serviceProduct.obtenerProductos()]
        this.productosCargados.emit(data)
      },
      error:(err)=>{
        console.log("ERROR ", err)
      }
    })
  }
  recibirProductoNuevo(producto: Producto) {
    this.serviceProduct.recibirProducto(producto); // lo agrega a la lista visible
  }
}

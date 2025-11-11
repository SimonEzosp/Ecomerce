import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ServicioProducto } from 'src/app/data/services/servicio-producto';
import { Producto } from 'src/app/data/interfaces/producto.model';
import { ListaProductoComponent } from 'src/app/components/lista-producto/lista-producto.component';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ListaProductoComponent]
})
export class CarritoPage implements OnInit {
  servicio = inject(ServicioProducto);
  carrito: Producto[] = [];
  constructor() { }

  ngOnInit() {
    this.carrito = this.servicio.carrito
  }
  eliminarDelCarrito(producto: Producto) {
    this.servicio.eliminarDelCarrito(producto);
    this.carrito = this.servicio.carrito; 
  }
}

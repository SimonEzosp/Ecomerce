import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ListaProductoComponent } from 'src/app/components/lista-producto/lista-producto.component';
import { Producto } from 'src/app/data/interfaces/producto.model';
import { ServicioProducto } from 'src/app/data/services/servicio-producto';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ListaProductoComponent]
})
export class TiendaPage implements OnInit {
  productService = inject(ServicioProducto)
 
  constructor() { }

  ngOnInit() {
  }

  agregarAlCarrito(producto: Producto) {
    this.productService.agregarAlCarrito(producto);
  }
}

import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioProducto {
  productos:Producto[]=[]
  carrito:Producto[]=[]
  recibirProducto({id,title,price,description,category,image}:Producto){
    const producto= {id,title,price,description,category,image}
    this.productos.push(producto)
  }
    agregarAlCarrito(producto: Producto) {
    this.carrito.push(producto);
  }
  eliminarDelCarrito(producto: Producto) {
  this.carrito = this.carrito.filter(p => p.id !== producto.id);
}
}

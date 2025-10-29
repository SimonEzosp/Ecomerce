import { inject, Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioProducto {
  productos:Producto[]=[]
  carrito:Producto[]=[]

  private http = inject(HttpClient)

  getURL= 'https://fakestoreapi.com/products'

  recibirProducto({id,title,price,description,category,image}:Producto){
    const producto= {id,title,price,description,category,image}
    this.productos.push(producto)
  }
    obtenerProductos(): Producto[] {
    return this.productos;
  }
    agregarAlCarrito(producto: Producto) {
    this.carrito.push(producto);
  }
  eliminarDelCarrito(producto: Producto) {
  this.carrito = this.carrito.filter(p => p.id !== producto.id);
  }
  obtenerCarrito(): Producto[] {
    return this.carrito;
  }


  getAPI():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.getURL)
  }
}

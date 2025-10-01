import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioProducto {
  productos:Producto[]=[]
  recibirProducto({id,title,price,description,category,image}:Producto){
    const producto= {id,title,price,description,category,image}
    this.productos.push(producto)

  }
}

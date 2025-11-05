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
  postURL= 'https://fakestoreapi.com/products'
  
  recibirProducto({id,title,price,description,category,image}:Producto){
    const producto= {id,title,price,description,category,image}
    this.productos.push(producto)
  }
    obtenerProductos(): Producto[] {
    return this.productos;
  }
    agregarAlCarrito(producto: Producto) {
       const productoExistente = this.carrito.find(p => p.id === producto.id);
      if(productoExistente ){
        alert("ya ingresaste este producto")
      }else{
        this.carrito.push(producto);
      }
    
  }
  eliminarDelCarrito(producto: Producto) {

    this.carrito = this.carrito.filter(p => p.id !== producto.id);
    alert("producto eliminado "+ producto.title )
  }
  obtenerCarrito(): Producto[] {
    return this.carrito;
  }

  postAPI(post: Producto):Observable<Producto[]>{
    alert("producto ingresado")
  return this.http.post<Producto[]>(this.postURL,post)
}

  getAPI():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.getURL)
  }
}

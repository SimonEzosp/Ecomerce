import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem,  IonLabel,  IonList,  IonThumbnail,IonAvatar} from '@ionic/angular/standalone';
import { CrearProductoComponent } from 'src/app/components/crear-producto/crear-producto.component';
import { Producto } from 'src/app/data/interfaces/producto.model';
import { ListaProductoComponent } from 'src/app/components/lista-producto/lista-producto.component';
import { ServicioProducto } from 'src/app/data/services/servicio-producto';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,CrearProductoComponent,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem,  IonLabel,  IonList,  IonThumbnail,IonAvatar,ListaProductoComponent]
})
export class ProductoPage implements OnInit {
  productos:Producto[]=[];//guarda productos en un arreglo
  prdocutService = inject(ServicioProducto)
  constructor() { }

  ngOnInit() {
  }
  recibirMensaje({id,title,price,description,category,image}:Producto){
    //desestructuramos el objeto recibido tipo Producto para obtener sus propiedades
    const nuevoProducto: Producto={id,title,price,description,category,image};
     //sse crea un nuevo objeto de tipo producto con los valores recibidos
    this.productos.push(nuevoProducto)
    //añadimos el objeto al arreglo productos para acumular los que envia el hijo
    console.log("mensaje enviado desde el hijo: ", this.productos);
    this.prdocutService.recibirProducto(nuevoProducto)
  }

}

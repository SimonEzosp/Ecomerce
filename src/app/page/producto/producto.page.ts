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
  productos:Producto[]=[];
  prdocutService = inject(ServicioProducto)
  constructor() { }

  ngOnInit() {
  }
  recibirMensaje({id,title,price,description,category,image}:Producto){
    const nuevoProducto: Producto={id,title,price,description,category,image};
    this.productos.push(nuevoProducto)
    
    console.log("mensaje enviado desde el hijo: ", this.productos);
    this.prdocutService.recibirProducto(nuevoProducto)


    this.prdocutService.postAPI(nuevoProducto).subscribe({
      next: (data:Producto[])=>{
        console.log("producto creado ", data)
      },
      error: (err)=>{
        console.log("ERROR ",err)
      }
    })
  }

}

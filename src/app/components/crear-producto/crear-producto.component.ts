import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonButton,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem,  IonLabel,  IonList,  IonThumbnail,IonAvatar,IonInput, IonTextarea} from '@ionic/angular/standalone';
import { Producto } from 'src/app/data/interfaces/producto.model';
import { FormsModule } from '@angular/forms';
import { empty } from 'rxjs';
@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss'],
  standalone:true,
  imports:[FormsModule,IonButton,CommonModule,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem,  IonLabel,  IonList,  IonThumbnail,IonAvatar,IonInput, IonTextarea]
})
export class CrearProductoComponent  implements OnInit {
  @Output() producto = new EventEmitter<Producto>();
  mensaje: string="";
    id:number;
    title: string;
    price: number;
    description: string;
    category: string;
    image:string;

  constructor() { } 
  ngOnInit() {}

  enviarProducto(){
      const productos={
      id: this.id,
      title: this.title,
      price: this.price,
      description: this.description,
      category: this.category,
      image: this.image
    }
    this.producto.emit(productos)
  }

}

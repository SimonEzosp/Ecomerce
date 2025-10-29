import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonButton,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonItem,  IonLabel,  IonList,  IonThumbnail,IonAvatar,IonInput, IonTextarea} from '@ionic/angular/standalone';
import { Producto } from 'src/app/data/interfaces/producto.model';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
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
    /*
    mensaje: string="";
    id:number;
    title: string;
    price: number;
    description: string;
    category: string;
    image:string;
    */
    formReactive:FormGroup;

  constructor( private fb: FormBuilder) { } 
  ngOnInit() { this.formularioReactivo() }
  formularioReactivo(){
    this.formReactive = this.fb.group({
      id:[null,[Validators.required]],
      title:['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
      price:[null,[Validators.required,Validators.min(0)]],
      description:['',[Validators.required,Validators.minLength(2),Validators.maxLength(200)]],
      category:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      image:['']
    })
  }

  guardarFormulario(){
    if(this.formReactive.valid){
      const productoEmitir: Producto = this.formReactive.value;
      this.producto.emit(productoEmitir)
      alert("formulario enviado")
    }else{
      alert("formulario no enviado")
    }
  }
  /*
  enviarProducto(){
      const productos:Producto={
      id: this.id,
      title: this.title,
      price: this.price,
      description: this.description,
      category: this.category,
      image: this.image
    }
    this.producto.emit(productos)
  }
*/
}

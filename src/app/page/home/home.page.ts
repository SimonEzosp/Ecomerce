import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonGrid,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonInput,IonButton,IonAvatar } from '@ionic/angular/standalone';
import { ListaProductoComponent } from 'src/app/components/lista-producto/lista-producto.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ListaProductoComponent,IonGrid,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonInput,IonButton,IonAvatar]
})
export class HomePage implements OnInit {
  img: string="assets/logo/logo.png";
  inactivo: boolean= false;
  usuario: string="";
  direccion: string="";
  pais: string="";
  ciudad: string="";
  idioma: string="";
  moneda: string="";

  constructor() { }

  ngOnInit() {
  }
  inactivar(){
    this.inactivo = !this.inactivo;
  }
  imprimir(){
    alert("boron preisonado")
    console.log({
      Usuario:    this.usuario,
      Direccion:  this.direccion,
      Pais:       this.pais,
      Ciudad:     this.ciudad,
      Idioma:     this.idioma,
      Moneda:     this.moneda,
    });
  }
}

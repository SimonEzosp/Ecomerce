import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonImg ,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonAvatar,IonButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.page.html',
  styleUrls: ['./info-usuario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonImg,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonAvatar,IonButton]
})
export class InfoUsuarioPage implements OnInit {
  ImgUser: string ="assets/imgUser/imagenUsuario.jpg";
  name: string="Simon";
  sName: string="David";
  fLName: string="Rodriguez";
  sLName: string="Ospina";
  birthDate: Date=new Date(2004,4,5);
  mail: string="simonrodriguezospina5870@gmail.com";
  phone: number=3223415969;
  linkedin: string="https://www.linkedin.com/in/simon-david-rodriguez-ospina/";

  constructor() { 
    
  
  }

  ngOnInit() {
  }

}

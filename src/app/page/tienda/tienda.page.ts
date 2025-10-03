import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ListaProductoComponent } from 'src/app/components/lista-producto/lista-producto.component';
import { Producto } from 'src/app/data/interfaces/producto.model';
import { ServicioProducto } from 'src/app/data/services/servicio-producto';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.page.html',
  styleUrls: ['./tienda.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,ListaProductoComponent]
})
export class TiendaPage implements OnInit {
  productService = inject(ServicioProducto)
  productoEnviado:Producto[]=[
        {
      id: 1,
      title: "Arroz",
      price: 0.1,
      description: "string",
      category: "string",
      image: "https://imgs.search.brave.com/2xL9y89fGdDukEY4NN9iCOiRFX8zKjzzY9efD-5HZOo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBh/bmVsaW5oYS5jb20u/YnIvaTEvYmstNTA3/OS13aGF0c2FwcC1p/bWFnZS0yMDIwLTEx/LTE4LWF0LTEzMzYw/OWFycm96LWNvbS1u/b3plcy53ZWJw"   

    },
    {
      id: 2,
      title: "Lenteja",
      price: 0.1,
      description: "string",
      category: "string",
      image: "https://imgs.search.brave.com/2Mgi5d1aN0pTi4K-ptdprshtdBI0I3VFkR2_bq5AkUM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZXRhc2RlcmVj/aHVwZXRlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/MS9MZW50ZWphcy1j/b24tY2hvcml6by1j/YXNlcmFzLXBhc28t/NS5wbmc"     
    },
    {
      id: 3,
      title: "Pitaya",
      price: 0.1,
      description: "string",
      category: "string",
      image: "https://imgs.search.brave.com/VKH6gHtNQWIVvBlTYVsmsRgvaQ0OsnTiqVSNxEMz_j4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cHNsYWluYy5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTUv/MDkvZHJhZ29uLWZy/dWl0LXBpdGF5YS5q/cGc"     
    },
    {
      id: 4,
      title: "Papa",
      price: 0.1,
      description: "string",
      category: "string",
      image: "https://imgs.search.brave.com/vXhFP2DPiLlPaS7O9sIDQA0gcByebPRB8LDjZDewY34/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vY2hlcm5pa292/YXR2L2NoZXJuaWtv/dmF0djIyMDcvY2hl/cm5pa292YXR2MjIw/NzAwMDAxLzE4ODE5/NDQ5NS11bi1tb250/JUMzJUIzbi1kZS1w/YXBhcy1qJUMzJUIz/dmVuZXMtc29icmUt/bGEtbWVzYS1sb3Mt/YmVuZWZpY2lvcy1k/ZS1sYXMtdmVyZHVy/YXMtY29zZWNoYS15/LXByb2R1Y3Rvcy5q/cGc_dmVyPTY"     
    },
    {
      id: 5,
      title: "Aguacate",
      price: 0.1,
      description: "string",
      category: "string",
      image: "http://imgs.search.brave.com/g4pMmKT2WLiuRhtaRoUTKRF9-Oe1B9OjA1t8GbehRpU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xODU4NzI1/LzI0MjgvaS80NTAv/ZGVwb3NpdHBob3Rv/c18yNDI4Njc4NS1z/dG9jay1waG90by1y/aXBlLWF2b2NhZG8u/anBn"     
    },
    {
      id: 6,
      title: "Platano",
      price: 0.1,
      description: "string",
      category: "string",
      image: "https://imgs.search.brave.com/WAIQrqtwSWcuNlp_tjGJHEEUz8ZlpJG9GLdTbNLxaUc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/NjA4Mjg4NC9lcy9m/b3RvL2JhbmFuYXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTFkZWMyR21CMkZr/R0F3M3o5TmNfQ291/cEhHZGxTY0RnRHAx/UkJzU2JpbG89"     
    },
    {
      id: 7,
      title: "Cafe",
      price: 0.1,
      description: "string",
      category: "string",
      image: "https://imgs.search.brave.com/Damui7DLdtR6M3g-2ih1hU-fpGk9jpcnk_Scinmr30E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA2/MTEvMjA1Ny83NTg3/L2ZpbGVzL2Jsb2ct/aW5lZmZhYmxlY29m/ZmVlLWNhZmUtZW4t/Z3Jhbm8tMDMuanBn/P3Y9MTc0MjU0NDMz/NQ"     
    },
    {
      id: 8,
      title: "Frijoles",
      price: 0.1,
      description: "string",
      category: "string",
      image: "https://imgs.search.brave.com/ywrn7-6hu0xSkUPRsHCQutInmnLVBnnzFTsKiF3wHTE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWct/Z2xvYmFsLmNwY2Ru/LmNvbS9yZWNpcGVz/LzA2MmFjYmIyM2Zk/YWE0MjAvMzAweDIy/MGNxODAvZnJpam9s/ZXMtbmVncm9zLWVu/LW9sbGEtZXhwcmVz/cy1mb3RvLXByaW5j/aXBhbC5qcGc"     
    },
    {
      id: 9,
      title: "Carne res",
      price: 0.1,
      description: "string",
      category: "string",
      image: "https://imgs.search.brave.com/Bij7ljiOPAd7_oON71hYHsqbwHlV1c97Y_6lGhdRXBU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM1/MzE2NDQ2L2VzL2Zv/dG8vZmlsZXRlcy1k/ZS1vam8tZGUtY29z/dGlsbGEtY3J1ZGEt/ZnJlc2NhLWFpc2xh/ZG9zLWVuLWJsYW5j/by5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9dFI2Q1ZoSTZi/UUhNdTM5YXM1OXhB/RjlkVGE1a3oxUEE4/RnVReW1SX09SND0"     
    },
    {
      id: 10,
      title: "Carne cerdo",
      price: 0.1,
      description: "string",
      category: "string",
      image: "https://imgs.search.brave.com/UtzCu1H0_9ErB4Gi2ADXxyNoiJriJL0OKkSbb4l25YI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vdG9wbnRwL3Rv/cG50cDE3MDMvdG9w/bnRwMTcwMzA3MDI3/Lzc0ODY4ODkzLWNh/cm5lLWRlLWNlcmRv/LWZyZXNjYS1lbi1y/b2RhamFzLXNvYnJl/LWZvbmRvLWRlLW1h/ZGVyYS5qcGc_dmVy/PTY"     
    },
    {
      id: 11,
      title: "Pollo",
      price: 0.1,
      description: "string",
      category: "string",
      image: "https://imgs.search.brave.com/wTbC5tJJohGmmJT1qY7ZLQa27kXtFlWZDDwn36HaTF4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzUyLzg3/LzM2MF9GXzY0NTI4/NzQ2X1hMNjF2N2o4/M01VN1BFQ3FHRHJO/OGpkTDNqYzAyc2VR/LmpwZw"     
    }
  ];
  constructor() { }

  ngOnInit() {
    for (let producto of this.productService.productos) {
      this.productoEnviado.push(producto);
    }
  }

  agregarAlCarrito(producto: Producto) {
    this.productService.agregarAlCarrito(producto);
    alert(`${producto.title} agregado al carrito`);
  }
}

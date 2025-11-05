import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'info-user',
    loadComponent: () => import('./page/info-usuario/info-usuario.page').then( m => m.InfoUsuarioPage)
  },
  {
    path: '',
    loadComponent: () => import('./page/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'shop',
    loadComponent: () => import('./page/tienda/tienda.page').then( m => m.TiendaPage)
  },
  {
    path: 'product',
    loadComponent: () => import('./page/producto/producto.page').then( m => m.ProductoPage)
  },
  {
    path: 'car',
    loadComponent: () => import('./page/carrito/carrito.page').then( m => m.CarritoPage)
  },
];

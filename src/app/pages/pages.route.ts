import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'items',
        loadChildren: './item-list/item-list.module#ItemListModule',
        data: [{ titulo: 'Detalle de producto' }]
      },
      {
        path: 'items/:id',
        loadChildren: './item-detail/item-detail.module#ItemDetailModule',
        data: [{ titulo: 'Detalle de producto' }]
      },
      {
        path: '',
        loadChildren: './home/home.module#HomeModule',
        data: [{ titulo: 'Inicio' }]
      },
    ]}
];

export const routesPages = RouterModule.forChild(routes);

// Angular
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [

    // Rest of the pages from the aplication
    { path: '', loadChildren: './pages/pages.module#PagesModule' },

    // Other rutes like error's page
    // { path: '**', pathMatch: "full",  redirectTo: "error" }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

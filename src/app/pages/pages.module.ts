import { NgModule } from '@angular/core';

// Modulos
import { HeaderModule } from '../components/header/header.module';

// Declarations
import { PagesComponent } from './pages.component';

// Routes
import { routesPages } from './pages.route';

@NgModule({
  imports: [
    HeaderModule,
    routesPages,
  ],
  declarations: [
    PagesComponent,
  ],
  
})
export class PagesModule { }

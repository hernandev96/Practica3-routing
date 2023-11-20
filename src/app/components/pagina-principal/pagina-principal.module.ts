import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraMenuComponent } from '../barra-menu/barra-menu.component';
import { ContenidoPrincipalComponent } from '../contenido-principal/contenido-principal.component';
import { PaginaPrincipalComponent } from './pagina-principal.component';

@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    BarraMenuComponent,
    ContenidoPrincipalComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    PaginaPrincipalComponent,
    BarraMenuComponent
  ]
})
export class PaginaPrincipalModule { }

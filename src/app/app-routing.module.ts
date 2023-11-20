import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';

const routes: Routes = [
  {
    path:"",
    component:PaginaPrincipalComponent
  },
  {
    path:"usuario/agregar-usuario",
    loadComponent:()=> import('src/app/components/agregar-usuario/agregar-usuario.component').then(comp=>comp.AgregarUsuarioComponent)
  },
  {
    path:"usuario/eliminar-usuario",
    loadComponent:()=> import('src/app/components/eliminar-usuario/eliminar-usuario.component').then(comp=>comp.EliminarUsuarioComponent)
  },
  {
    path:"usuario/actualizar-usuario",
    loadComponent:()=> import('src/app/components/actualizar-usuario/actualizar-usuario.component').then(comp=>comp.ActualizarUsuarioComponent)
  },
  {
    path:"usuario/consultar-usuario",
    loadComponent:()=> import('src/app/components/consultar-usuario/consultar-usuario.component').then(comp=>comp.ConsultarUsuarioComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

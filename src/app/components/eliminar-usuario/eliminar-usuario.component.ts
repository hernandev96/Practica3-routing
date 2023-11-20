import { Component, OnInit } from '@angular/core';
import { PaginaPrincipalModule } from "../pagina-principal/pagina-principal.module";
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { CrudServicesService } from 'src/app/servicios/crud-services.service';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-eliminar-usuario',
    templateUrl: './eliminar-usuario.component.html',
    styleUrls: ['./eliminar-usuario.component.css'],
    standalone: true,
    imports: [PaginaPrincipalModule,NgFor,MatButtonModule,NgIf,MatCardModule]
})
export class EliminarUsuarioComponent implements OnInit{

  constructor(private servicioUsuarios:CrudServicesService,private notificacion:ToastrService){}

  usuarios:Usuario[]=[];
  dialogActivo=false;
  indice=0;


  ngOnInit(): void {
    this.servicioUsuarios.obtenerUsuarios().subscribe((response)=>{
      this.usuarios=response;
      console.table(this.usuarios);
    });
  }
  activarDialog(indice:number){
    this.dialogActivo=true;
    this.indice=indice+1;
  }
  cancelar(){
    this.dialogActivo=false;
  }
  eliminarUsuario(){
    this.servicioUsuarios.eliminarUsuario(this.indice).subscribe((response)=>{
      if(response.status=="ok"){
        this.notificacion.success("Se elimino correctamente el usuario");
      }else{
        this.notificacion.error("No se pudo eliminar el usuario, Intente nuevamente");
      }
      this.dialogActivo=false;
    });
    this.servicioUsuarios.obtenerUsuarios().subscribe((response)=>{
      this.usuarios=response;
      console.table(this.usuarios);
    });
  }

}

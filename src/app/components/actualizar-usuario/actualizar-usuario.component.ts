import { Component, OnInit} from '@angular/core';
import { PaginaPrincipalModule } from '../pagina-principal/pagina-principal.module';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { CrudServicesService } from 'src/app/servicios/crud-services.service';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-actualizar-usuario',
    templateUrl: './actualizar-usuario.component.html',
    styleUrls: ['./actualizar-usuario.component.css'],
    standalone: true,
    imports: [PaginaPrincipalModule,NgFor,MatButtonModule,NgIf,MatCardModule,MatInputModule,MatFormFieldModule,FormsModule]
})
export class ActualizarUsuarioComponent implements OnInit {
  constructor(private usuarioService:CrudServicesService,private toastr:ToastrService){}

  usuarios:Usuario[]=[];
  usuarioMuestra:Usuario={
    id: 0,
    nombre: null,
    apellido: null,
    edad: null,
    peso: null,
    domicilio: null,
    telefono: null,
    email: null
  }

  ngOnInit(): void {
    this.usuarioService.obtenerUsuarios().subscribe((data)=>{
      this.usuarios=data;
      console.table(this.usuarios);
    });
  }
  mostrarDetalles(index:number){
    this.usuarioMuestra=this.usuarios[index];
    console.table(this.usuarioMuestra);
  }
  cerrar(){
    this.usuarioMuestra={
      id: 0,
      nombre: null,
      apellido: null,
      edad: null,
      peso: null,
      domicilio: null,
      telefono: null,
      email: null
    };
  }
  actualizarUsuario(){
    this.usuarioService.actualizarUsuario(this.usuarioMuestra).subscribe((response)=>{
      if(response.status=='ok'){
        this.toastr.success("Usuario actualizado correctamente");
        this.cerrar();
      }else{
        this.toastr.error("No se pudo actualizar al usuario, Intente nuevamente");
        this.cerrar();
      }
    });
  }
}

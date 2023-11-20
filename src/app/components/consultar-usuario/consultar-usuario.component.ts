import { Component, OnInit} from '@angular/core';
import { PaginaPrincipalModule } from '../pagina-principal/pagina-principal.module';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { CrudServicesService } from 'src/app/servicios/crud-services.service';
import { NgFor } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import {MatCardModule} from '@angular/material/card';



@Component({
    selector: 'app-consultar-usuario',
    templateUrl: './consultar-usuario.component.html',
    styleUrls: ['./consultar-usuario.component.css'],
    standalone: true,
    imports: [PaginaPrincipalModule,NgFor,MatButtonModule,NgIf,MatCardModule]
})
export class ConsultarUsuarioComponent implements OnInit {
  constructor(private usuarioService:CrudServicesService){}

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
}

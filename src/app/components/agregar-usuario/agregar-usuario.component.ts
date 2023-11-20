import {Component} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import { PaginaPrincipalModule } from '../pagina-principal/pagina-principal.module';
import { Usuario } from 'src/app/interfaces/usuario.interface';
import { CrudServicesService } from 'src/app/servicios/crud-services.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-agregar-usuario',
    templateUrl: './agregar-usuario.component.html',
    styleUrls: ['./agregar-usuario.component.css'],
    standalone: true,
    imports: [
      MatButtonModule,
      MatStepperModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      PaginaPrincipalModule,
    ],
})
export class AgregarUsuarioComponent {

  constructor(private _formBuilder: FormBuilder,private crudService:CrudServicesService,private toastr:ToastrService) {}



  usuario:Usuario={
    id:0,
    nombre:"",
    apellido:"",
    edad:"",
    peso:"",
    domicilio:"",
    telefono:"",
    email:""
  }

  firstFormGroup = this._formBuilder.group({
    nombreCtrl: ['', Validators.required],
    apellidoCtrl: ['', Validators.required],
    edadCtrl: ['', Validators.required],
    pesoCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    domicilioCtrl: ['', Validators.required],
    telefonoCtrl: ['', Validators.required],
    correoCtrl: ['', Validators.required],
  });

  EnviarUsuario():void{
    // Obtencion de los valores de los formularios definidos
    var firstForm=this.firstFormGroup.value;
    var secondForm=this.secondFormGroup.value;
    // guardado de valores del stepper en la variable usuario que se emitira
    this.usuario.id=0;
    this.usuario.nombre=firstForm.nombreCtrl;
    this.usuario.apellido=firstForm.apellidoCtrl;
    this.usuario.edad=firstForm.edadCtrl;
    this.usuario.peso=firstForm.pesoCtrl;
    this.usuario.domicilio=secondForm.domicilioCtrl;
    this.usuario.telefono=secondForm.telefonoCtrl;
    this.usuario.email=secondForm.correoCtrl;

    console.table(this.usuario);
    console.table(this.crudService.agregarUsuario(this.usuario));

    this.crudService.agregarUsuario(this.usuario).subscribe((response)=>{
        console.log(response);
        if(response.status=="ok"){
          this.toastr.success("Usuario agregado correctamente");

        }else{
          this.toastr.error("No se pudo agregar el usuario,Intente nuevamente");
        }
    });

  }


}

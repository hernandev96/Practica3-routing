import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginaPrincipalModule } from './components/pagina-principal/pagina-principal.module';
import { CrudServicesService } from './servicios/crud-services.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PaginaPrincipalModule,
    HttpClientModule,
    ToastrModule.forRoot()

  ],
  providers: [CrudServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VexModule } from '../@vex/vex.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { ViewsComponent } from './views/views.component';
import { PagesComponent } from './views/pages/pages.component';
import { ClienteComponent } from './views/pages/cliente/cliente.component';
import { ReceituarioComponent } from './views/pages/receituario/receituario.component';
import { InicioComponent } from './views/pages/inicio/inicio.component';
import { ModalComponent } from './views/pages/modal/modal.component';
import { ModalReceituarioComponent } from './views/pages/modal/modal-receituario/modal-receituario.component';
import { ModalClienteComponent } from './views/pages/modal/modal-cliente/modal-cliente.component';
import { ServicesComponent } from './services/services.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [AppComponent,
    ViewsComponent,
    ClienteComponent,
    ReceituarioComponent,
    InicioComponent,
    PagesComponent,
    ModalComponent,
    ModalReceituarioComponent,
    ModalClienteComponent,
    ServicesComponent,
    ModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,

    // Vex
    VexModule,
    CustomLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

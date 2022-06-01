import { NgModule, Component } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Formulario1Component } from './formulario1/formulario1.component';

//Importar libreria para las rutas
import { Routes, RouterModule } from '@angular/router';

//Importar librerias para utilziar los formullarios reactivos
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

const routes:Routes = [
  {path:'', component: Formulario1Component},
  {path: 'formulario1', component: Formulario1Component},
]

@NgModule({
  declarations: [
    AppComponent,
    Formulario1Component,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

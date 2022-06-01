import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Formulario1Component } from './formulario1/formulario1.component';
//Importar libreria para las rutas
import { Routes, RouterModule } from '@angular/router';

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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

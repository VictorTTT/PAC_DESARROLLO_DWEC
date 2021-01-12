import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutesRecognized} from "@angular/router";

// Rutas

import {APP_ROUTING} from "./app.routes";

// Servicios

import {PersonajesService} from './services/personajes.service';

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajeComponent } from './components/personaje/personaje.component';



@NgModule({
  declarations: [ // Los componentes se colocan aquí
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PersonajesComponent,
    PersonajeComponent,

  ],
  imports: [
    BrowserModule,APP_ROUTING // El enrutamiento se coloca aquí
  ],
  providers: [
      PersonajesService // Los servicios se colocan aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Este archivoes sumamente importante, contiene el enrutamiento
// de nuestra app la primera en el curso este código se ha generado
// automáticamente con el comando ng2-routes pero a mí no me ha funcionado
// por lo tanto, hay que generar a mano toddo esre código


import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from "./components/about/about.component";
import {PersonajesComponent} from "./components/personajes/personajes.component";
import {PersonajeComponent} from "./components/personaje/personaje.component";


const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'personajes', component: PersonajesComponent},
    {path: 'D:\\Phpstorm_projects\\Archivos\\Curso_Angular_de_cero_a_expertoAngular_10\\Angular\\02-minecraftspa\\src\\app\\components\\personaje/:id', component: PersonajeComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
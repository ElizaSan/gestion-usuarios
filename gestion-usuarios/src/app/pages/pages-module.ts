import { ApplicationConfig, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Perfil } from './perfil/perfil';
import { Home } from './home/home';
import { Documentacion } from './documentacion/documentacion';
import { Estructuras } from './estructuras/estructuras';
import { Usuarios } from './usuarios/usuarios';
import { RouterModule, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
    {
    path: '',
    component: Home
  },
  {
    path: 'documentacion',
    component: Documentacion
  },
  {
    path: 'estructuras',
    component: Estructuras
  },
  {
    path: 'usuarios',
    component: Usuarios
  },
  {
    path: 'perfil',
    component: Perfil
  },

]

const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
  ]
}



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Home,Documentacion,Estructuras,Usuarios,Perfil,
    RouterModule.forChild(routes),


  ]
})
export class PagesModule { }

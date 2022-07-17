import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { ProgresComponent } from './pages/progres/progres.component';


const routes: Routes = [

  {
    path:'', 
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent },
      {path: 'progres', component: ProgresComponent },
      {path: 'grafica1', component: Grafica1Component },
      {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    ]
  },

  

  {path: 'register', component: RegisterComponent },
  {path: 'login', component: LoginComponent },

  
  {path: '**', component: NopagefoundComponent },

];


@NgModule({
  
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

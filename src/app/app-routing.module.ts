import { AntComponent } from './ant/ant.component';
import { JoBioComponent } from './jo-bio/jo-bio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TechComponent} from './tech/tech.component';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthComponent} from './auth/auth.component';


const routes: Routes =  [
  { path: '', redirectTo: '/tech', pathMatch: 'full'},
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent},
  {path: 'bio-jonathan', component: JoBioComponent},
  { path: 'ant', component: AntComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

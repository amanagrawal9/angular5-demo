import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {CompetitionListComponent} from "./pages/competition/competition-list/competition-list.component";
import {AuthGuard} from "./auth-guard";


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'competitions', component: CompetitionListComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

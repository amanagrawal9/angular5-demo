import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CompetitionListComponent} from './pages/competition/competition-list/competition-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {LoginComponent} from './pages/login/login.component';
import {CompetitionService} from "./services/competition.service";
import {UserService} from "./services/user.service";
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from "./http-interceptors/auth-interceptor";
import {AuthGuard} from "./auth-guard";
import {CompetitionCreateComponent} from './pages/competition/competition-create/competition-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CompetitionListComponent,
    LoginComponent,
    CompetitionCreateComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRoutingModule, FormsModule
  ],
  providers: [UserService, CompetitionService, AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

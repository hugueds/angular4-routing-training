import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './login/auth.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.module.routing';
import { MaterialModules } from './modules/material.module';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AlunosModule } from "./alunos/alunos.module";



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModules,
    AlunosModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }

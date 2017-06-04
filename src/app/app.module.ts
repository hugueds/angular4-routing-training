import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app.routing.module';
import { MaterialModules } from './modules/material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { CursosService } from './shared/cursos.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CursosComponent,
    CursoDetalheComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModules,
    AppRoutingModule    
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})

export class AppModule { }

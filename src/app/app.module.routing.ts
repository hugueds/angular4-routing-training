import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';



import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path : 'cursos', loadChildren: 'app/cursos/cursos.module#CursosModule', canActivate: [AuthGuard] },    
    { path : '', component: HomeComponent, canActivate: [AuthGuard] },
    { path : 'login', component: LoginComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);


@NgModule({
    imports : [RouterModule.forRoot(APP_ROUTES)],
    exports : [RouterModule]
})

export class AppRoutingModule{

}
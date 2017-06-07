import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';


const CURSOS_ROUTES: Routes = [    
    { path : '', component: CursosComponent },
    { path : 'notFound', component: NotFoundComponent },            
    { path : ':id', component: CursoDetalheComponent }
];


@NgModule({
    imports : [RouterModule.forChild(CURSOS_ROUTES)],
    exports : [RouterModule]
})

export class CursosRoutingModule{

}
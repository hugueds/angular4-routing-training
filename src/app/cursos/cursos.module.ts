import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos.routing';

import { CursosService } from 'app/shared/cursos.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';


@NgModule({
    imports: [CommonModule, CursosRoutingModule],
    exports: [],
    declarations : [
        CursosComponent,
        CursoDetalheComponent,
        NotFoundComponent
    ],
    providers : [CursosService]

})

export class CursosModule{

}
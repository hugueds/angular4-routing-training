import { AlunosService } from './alunos.service';

import { AlunosRouter } from './alunos.routing';
import { AlunosComponent } from './alunos.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';



@NgModule({
    imports : [
        CommonModule,
        AlunosRouter
    ],
    exports : [],
    providers : [AlunosService],
    declarations : [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
})



export class AlunosModule{

}
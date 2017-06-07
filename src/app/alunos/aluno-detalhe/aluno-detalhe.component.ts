
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

import { AlunosService } from '../alunos.service';


@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno: any;
  id:string;
  inscription: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _alunosService: AlunosService,
    private router:Router
    ) {  }

  ngOnInit() {

    this.inscription = this._route.params.subscribe( params => {
      this.id = params['id'];
      this.aluno = this._alunosService.getAluno(parseInt(this.id));
    })

    


    if (this.aluno == null){
       this.router.navigate(['/notFound']);
    }

  }

  ngOnDestroy(){
    this.inscription.unsubscribe();
  }


}

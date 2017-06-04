import { CursosService } from './../shared/cursos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: ' curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  curso: any;
  id:string;
  inscription: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _cursosService: CursosService,
    private router:Router) {
    
   }

  ngOnInit() {
    this.inscription = this._route.params.subscribe( params => {
      this.id = params['id']
    })

    this.curso = this._cursosService.getCurso(parseInt(this.id));

    if (this.curso == null){
       this.router.navigate(['/notFound']);
    }

  }

  ngOnDestroy(){
    this.inscription.unsubscribe();
  }

}

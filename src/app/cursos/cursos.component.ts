import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from './../shared/cursos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: any[];

  page: number;

  inscription: Subscription;


  constructor(
    private _cursosService: CursosService,
    private _route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.cursos = this._cursosService.getCursos();
    this.inscription = this._route.queryParams.subscribe( 
      params => this.page = params['page']
    );
  }

  ngOnDestroy(){
    this.inscription.unsubscribe();
  }

  navigate(route, params?){
    this.router.navigate(
      [route], 
      { queryParams : params }
    );
  }

  nextPage(){    
    this.navigate('/cursos', { page : ++this.page });
  }

  previousPage(){
    if (this.page > 1){
      this.navigate('/cursos', { page : --this.page });
    }
  }

}

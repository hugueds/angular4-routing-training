import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AlunosService } from './alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  alunos: any[];

  inscription: Subscription;

  constructor(
    private _alunosService: AlunosService,
    private _route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.alunos = this._alunosService.getAlunos();
    
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    {id : 0, name: 'Hugo', email: 'hugo@hugo.com'},
    {id : 1, name: 'Hugueds', email: 'hugueds@hugo.com'},
    {id : 2, name: 'Hugueira', email: 'hugueira@hugo.com'}    
  ]

  constructor() { }

  getAlunos(){
    return this.alunos;
  }

   getAluno(id: number){
    let alunos = this.getAlunos();
    for (let i = 0; i < alunos.length; i++){
      let aluno = alunos[i];
      if (aluno.id == id){
        return aluno;
      }
    }
    return null;
  }



}

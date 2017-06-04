import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(){
    return [
      {id : 0, name: 'Angular'},
      {id : 1, name: 'Node'},
      {id : 2, name: 'CSharp'}      
    ]    
  }

  getCurso(id: number){
    let cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++){
      let curso = cursos[i];
      if (curso.id == id){
        return curso;
      }
    }
    return null;
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FuncionarioDTO } from '../../models/funcionarioDTO';
import { Observable } from 'rxjs/Observable';

const API = "http://localhost:8080/funcionarios";

@Injectable()
export class FuncionariosProvider {

  constructor(public http: HttpClient) {
    
  }

  getFuncionarios(): Observable<FuncionarioDTO[]>{
    return this.http.get<FuncionarioDTO[]>(API);
  }

  inserir(funcionario: FuncionarioDTO){
    return this.http.post(API, funcionario);
  }

}

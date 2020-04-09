import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Funcoes } from '../../models/funcoesDTO';
import { Observable } from 'rxjs/Observable';

const API = "http://localhost:8080/funcoes";

@Injectable()
export class FuncoesProvider {

  constructor(public http: HttpClient) {

  }

  listarFuncoes(): Observable<Funcoes[]> {
    return this.http.get<Funcoes[]>(API);
  }

}

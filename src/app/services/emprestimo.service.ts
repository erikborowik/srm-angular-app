

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import {Emprestimo} from '../model/emprestimo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'})
};

@Injectable()
export class EmprestimoService {
  
  emprestimoUrl = 'http://localhost:8080/emprestimo';

  constructor(
    private http: HttpClient) {  }

 public getAllEmprestimos(){
  return this.http.get(this.emprestimoUrl);

}

public createEmprestimo(emprestimo: Emprestimo) {
  let body = JSON.stringify(emprestimo);
        return this.http.post(this.emprestimoUrl, body, httpOptions);
}


public getEmprestimoById(id: number) {
  return this.http.get(`${this.emprestimoUrl}/${id}`);
}

public updateEmprestimo(emprestimo: Emprestimo) {
  let body = JSON.stringify(emprestimo);
  return this.http.put(`${this.emprestimoUrl}/${emprestimo.id}`, body, httpOptions);
}

public deleteEmprestimoById(id: number) {
  return this.http.delete(`${this.emprestimoUrl}/${id}`);
}

public simularEmprestimo(emprestimo: Emprestimo) {
  let body = JSON.stringify(emprestimo);
        return this.http.post(`${this.emprestimoUrl}/simular`, body, httpOptions);
}

}


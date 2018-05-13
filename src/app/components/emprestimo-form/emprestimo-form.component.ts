import { Component, OnInit } from '@angular/core';
/* import { FormGroup, FormControl, Validators } from '@angular/forms'; */

import {Emprestimo} from '../../model/emprestimo'
import {EmprestimoService} from '../../services/emprestimo.service'
import {NgForm} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-emprestimo-form',
  templateUrl: './emprestimo-form.component.html',
  styleUrls: ['./emprestimo-form.component.css']
})
export class EmprestimoFormComponent implements OnInit {
  
  mensagemSucesso = "Formulário enviado com sucesso!";
  mensagemErro = "Ocorreu um erro tente novamente!";
  emprestimo = new Emprestimo(null,null,null,"A");
  submitted = false;
  sucesso = false;
  erro = false;
  constructor(private emprestimoService : EmprestimoService) { 

  }

  onSubmit(f: NgForm){
    let jsn = f.value;
    let emprestimo = new Emprestimo(null, jsn.nome, jsn.limiteCredito, jsn.risco);
    this.addEmprestimo(emprestimo);
    this.emprestimo = new Emprestimo(null,null,null,"A");
  }

  addEmprestimo(emprestimo : Emprestimo){
    this.emprestimoService.createEmprestimo(emprestimo).subscribe(
      data => {
        this.sucesso = true;
        return true;
      },
      error => {
        console.error("Erro ao salvar!");
        this.erro = true;
        return Observable.throw(error);
      }
   );
  }

  simularEmprestimo(){
    console.log(this.emprestimo.limiteCredito);
    this.emprestimoService.simularEmprestimo(this.emprestimo).subscribe(
      data => {
        let myJSON = data as Emprestimo;
        alert("Valor total para pagamento R$" + myJSON.valorPagamento);
        return true;
      },
      error => {
        console.error("Erro ao simular!");
        this.erro = true;
        return Observable.throw(error);
      }
   );
  }

  ngOnInit() { }
  

}

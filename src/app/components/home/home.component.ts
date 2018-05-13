import { Component, OnInit } from '@angular/core';
import { EmprestimoService } from '../../services/emprestimo.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private emprestimoService : EmprestimoService) { }

  public emprestimos;

  ngOnInit() {
    this.getAllEmprestimos();
  }

  getAllEmprestimos(){
    this.emprestimoService.getAllEmprestimos().subscribe(
      data => { this.emprestimos = data},
      err => console.error(err),
      () => console.log('ok')
    );
  }

  deleteEmprestimo(emprestimo) {
    if (confirm("Tem certeza que deseja deletar ?")) {
      this.emprestimoService.deleteEmprestimoById(emprestimo.id).subscribe(
         data => {
           // refresh the list
           this.getAllEmprestimos();
           return true;
         },
         error => {
           console.error("Erro ao tentar deletar!");
           return Observable.throw(error);
         }
      );
    }
  }

  updateEmprestimo(emprestimo) {
    this.emprestimoService.updateEmprestimo(emprestimo).subscribe(
       data => {
         this.getAllEmprestimos();
         return true;
       },
       error => {
         console.error("Erro ao tentar salvar!");
         return Observable.throw(error);
       }
    );
  }

}

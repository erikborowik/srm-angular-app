export class Emprestimo {

    constructor(
        public id: number,
        public nome: string,
        public limiteCredito: number,
        public risco: string,
        public taxaJuros? : number,
        public valorPagamento? : number
    ){}
}

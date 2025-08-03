interface ItemEstoque {
    id: number;
    nome: string
    preco: number;
    quantidade: number;

    detalhes(): string;
}

class Produto implements ItemEstoque {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    
    constructor(id, nome, preco, quantidade) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

        detalhes(): string {
        return `
        Id: ${this.id}
        Nome: ${this.nome}
        Preço: ${this.preco}
        Quantidad: ${this.quantidade}
        `
    }
    

    valorTotalItens(): number {
        return this.preco * this.quantidade;
    }

    adicionarEstoque(item: number): void {
        this.quantidade = this.quantidade + item;
    }

    removerEstoque(quantidade: number): void {

        if (quantidade > this.quantidade) {
            console.log(`impossível remover ${quantidade} itens, pois só há ${this.quantidade}. Estoque zerado.`);
        } else {
            this.quantidade -= quantidade;
        }
    }
}

function gerarRelatorio(ItemEstoque: ItemEstoque): void {
    console.log("--- Relatório do Estoque ---");
    console.log(ItemEstoque.detalhes());
    console.log("____________________________");
}

const produto = new Produto(1, "Teclado Mecânico", 10, 5);
gerarRelatorio(produto);
produto.adicionarEstoque(10);
gerarRelatorio(produto);
produto.removerEstoque(5);
gerarRelatorio(produto);
produto.removerEstoque(20);
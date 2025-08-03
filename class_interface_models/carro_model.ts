interface Veiculo {
    marca: string;
    modelo: string;
    ano: number;
    detalhes(): string;
}


class Carro implements Veiculo {

    marca: string;
    modelo: string;
    ano: number;

    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    detalhes(): string {
        return `
        Marca: ${this.marca}
        Modelo: ${this.modelo}
        Ano: ${this.ano}
        `
    }
}

function imprimirRelatorio(item: Veiculo): void {
        console.log("--- Relatório do Veículo ---")
        console.log(item.detalhes())
        console.log("----------------------------")
    }


const carro = new Carro("BMW", "320i", 2025)

imprimirRelatorio(carro)
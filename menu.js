import prompt from 'prompt-sync'
let ler = prompt()


import { lerDeposito, lerSaque, lerExtrato, lerJurosComp } from "./financeiro.js";
import { banner, verm, ama, ver, azul, cia, mage, bra, pre, fundPre, fundVer, fundAma, fundVerm, fundAzu, fundCia, fundMag, fundBra, } from './exibir.js';

function exibirMenu() {
    const menu = `
    MENU PRINCIPAL:
    
    1 – DEPOSITAR
    2 – SAQUE
    3 – EXTRATO
    4 - SIMULAÇÃO DE INVESTIMENTO 
    5 - ENCERRAR APLICAÇÃO
    `;
    console.log(azul, menu);
}

export function exibirOpcoes() {
    let continuar = true;
    while (continuar) {
        banner();
        exibirMenu();
        let opcEscolha = Number(ler("Escolha uma opção: "));

        if (opcEscolha === 1) {
            console.clear();
            banner();
            lerDeposito();
        } else if (opcEscolha === 2) {
            console.clear();
            banner();
            lerSaque();        
        } else if (opcEscolha === 3) {
            banner();
            console.clear();
            lerExtrato();
            console.log(fundCia, 'Aperte ENTER para contiuar');
            ler();
        } else if (opcEscolha === 4) {
            console.clear();
            banner();
            let C = Number(ler('Qual seu Capital?: '));
            let i = Number(ler('Quanto está a taxa de juros?: '));
            let t = Number(ler('Em quanto tempo deseja guardar?: '));
            let resultado = lerJurosComp(C, i, t);
            console.log(fundAma, `Em ${t} anos, seu acumulo será de ${resultado.toFixed(5)}`);
            console.log(fundAma, 'Aperte enter para contiuar');
            ler();
            } else if (opcEscolha === 5) {
            console.clear();
            banner();
            console.log(fundCia, "Operação encerrada.");
            continuar = false;
        } else {
            console.log("Opção inválida.");
        }
    }
}
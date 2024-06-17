
import prompt from "prompt-sync";
let ler = prompt();



import { lerDeposito, lerSaque, lerExtrato } from "./financeiro.js";


function lerEntrada() {
    return Number(ler())
}

export function exibirMenu() {
    console.log(`MENU PRINCIPAL: `);
    console.log(`
    1 – DEPOSITAR
    2 – SAQUE
    3 – EXTRATO
    4 - ENCERRAR APLICAÇÃO `);

}


export function exibirOpcoes() {
    let opcEscolha;
    do {
        exibirMenu();
        console.log();
        opcEscolha = lerEntrada();

        if (opcEscolha === 1) {
            console.clear();
            console.log("Quanto irá depositar?");
            let saldo = lerDeposito();
            let totalSaldo = 0;
            for (let i = 0; i < saldo.length; i++) {
                totalSaldo += saldo[i];
            }
            console.log(`Saldo atual: ${totalSaldo}`);
        } else if (opcEscolha === 2) {
            console.clear();
            console.log("Quanto irá sacar?");
            let saldo = lerSaque();
            let totalSaldo = 0;
            for (let i = 0; i < saldo.length; i++) {
                totalSaldo += saldo[i];
            }
            console.log(`Saldo atual: ${totalSaldo}`);
            console.log(ler());
        } else if (opcEscolha === 3) {
            console.clear();
            let extrato = lerExtrato();
            console.log("Seu extrato bancário é:" + extrato);
        } else if (opcEscolha === 4) {
            console.log("Operação encerrada.");
        } else {
            console.log("Opção inválida.");
        }
    } while (opcEscolha !== 4);
}

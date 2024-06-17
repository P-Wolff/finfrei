import prompt from 'prompt-sync'
let ler = prompt()

import { banner, verm, ama, ver, azul, cia, mage, bra, pre, fundPre, fundVer, fundAma, fundVerm, fundAzu, fundCia, fundMag, fundBra, } from './exibir.js';

let saldo = 0;

export function lerDeposito() {
    let continuar = true;

    while (continuar) {
        console.log(ver, "Digite o valor a ser depositado ou 'c' para cancelar: \n");
        let deposito = ler();

        if (deposito.toLowerCase() === 'c') {
            continuar = false;
        } else {
            deposito = Number(deposito);
            if (!isNaN(deposito) && deposito > 0) {
                saldo += deposito;
                console.log(fundVer, `Valor depositado: ${deposito}`);
            } else {
                console.log(ama, "Valor inválido.");
            }
        }
    }
    return saldo;
}

export function lerSaque() {
    let continuar = true;

    while (continuar) {
        console.log(verm, "Digite o valor a ser sacado ou 'c' para cancelar: \n");
        let saque = ler();

        if (saque.toLowerCase() === 'c') {
            continuar = false;
        } else {
            saque = Number(saque);
            if (!isNaN(saque) && saque > 0) {
                if (saque <= saldo) {
                    saldo -= saque;
                    console.log(fundVerm, `Valor sacado: ${saque}`);
                } else {
                    console.log(fundVerm, "Saldo insuficiente.");
                }
            } else {
                console.log(ama, "Valor inválido.");
            }
        }
    }

    return saldo;
}

export function lerExtrato() {
    console.log(fundAma, `Seu saldo atual é: ${saldo}`);
}

export function lerJurosComp(C, i, t) {
    let M = C * Math.pow(( 1 + ( i / 100 )), t)
    return M
}
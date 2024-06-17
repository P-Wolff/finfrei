
import prompt from "prompt-sync";
let ler = prompt();


function lerSaldo() {
    let saldo = [];
    return saldo
}

export function lerDeposito() {
    let continuar = true;
    let deposito = 0;
    let saldo = lerSaldo();

    do {
        console.log("Digite 'c' para cancelar: \n");
        let depositar = ler();

        if (depositar.toLowerCase() === 'c') {
            continuar = false;
        } else{
            depositar = Number(depositar);
            if (!isNaN(depositar) && depositar > 0) {
                deposito += depositar;
                saldo.push(deposito);
            } else {
                console.log('Valor inválido.');
            }
        }

    }while (continuar);

    return saldo;
}

export function lerSaque(saque) {
    let continuar = true;
    let saldo = lerDeposito();

    do {
        console.log("Digite o valor a ser sacado ou 'c' para cancelar: \n");
        let saques = ler();

        if (saques.toLowerCase() === 'c') {
            continuar = false;
        } else {
            saques = Number(saques);
            if (!isNaN(saques) && saques > 0) {
                let totalSaldo = 0;
                for (let i = 0; i < saldo.length; i++) {
                    totalSaldo += saldo[i];
                } if (saques <= totalSaldo) {
                    saldo.push(-saques);
                } else {
                    console.log("Saldo insuficiente.");
                }
            } else {
                console.log("Valor inválido.");
            }
        }
    } while (continuar);

    return saldo;
}

export function lerExtrato() {
    let continuar = true;
    do {
        console.log("Digite 'c' para voltar: \n");
        let voltar = ler();
        if (saques.toLowerCase() === 'c') {
            let extrato = lerDeposito();
            continuar = false;
        } else {
            console.log("Valor inválido.");
        }
    } while (continuar);
    
    return extrato
}
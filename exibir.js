import prompt from 'prompt-sync'
let ler = prompt()


// Configurando nosso ambiente...
export function banner() {
    console.log( 
`
███████╗██╗███╗   ██╗███████╗██████╗ ███████╗██╗
██╔════╝██║████╗  ██║██╔════╝██╔══██╗██╔════╝██║
█████╗  ██║██╔██╗ ██║█████╗  ██████╔╝█████╗  ██║
██╔══╝  ██║██║╚██╗██║██╔══╝  ██╔══██╗██╔══╝  ██║
██║     ██║██║ ╚████║██║     ██║  ██║███████╗██║
╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝
`
    );
}

//CORES...
export const verm = '\x1b[31m%s\x1b[0m';
export const ama = '\x1b[33m%s\x1b[0m';
export const ver = '\x1b[32m%s\x1b[0m';
export const azul = '\x1b[34m%s\x1b[0m';
export const cia = '\x1b[36m%s\x1b[0m';
export const mage = '\x1b[35m%s\x1b[0m';
export const bra = '\x1b[37m%s\x1b[0m';
export const pre = '\x1b[30m%s\x1b[0m'

//Fundo 
export const fundPre = '\x1b[40m%s\x1b[0m';
export const fundVerm = '\x1b[41m%s\x1b[0m';
export const fundAma = '\x1b[43m%s\x1b[0m';
export const fundVer = '\x1b[42m%s\x1b[0m';
export const fundAzu = '\x1b[44m%s\x1b[0m';
export const fundCia = '\x1b[46m%s\x1b[0m';
export const fundMag = '\x1b[45m%s\x1b[0m';
export const fundBra = '\x1b[47m%s\x1b[0m';
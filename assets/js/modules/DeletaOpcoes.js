export class DeletaOpcoes{
    constructor(opcaoEscolhida){
        this.opcaoEscolhida = opcaoEscolhida;
        this.apaga();
    }

    apaga(){
        const arrayOpcoes = document.querySelector('#opcoes').querySelectorAll('.opcao');
        for(let opcao of arrayOpcoes){
            if(opcao.firstElementChild !== this.opcaoEscolhida){
                opcao.classList.add('apagado');
            }
        }
    }
}
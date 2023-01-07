export class Reinica{
    constructor(){
        this.rival = document.querySelector('#rival');
        this.inicio();
    }

    zera(){
        document.querySelector('#tituloMSG').innerHTML = '';
        document.querySelector('#msg').classList.add('apagado');
    }

    revelaOpcoes(){
        for(let opcao of document.querySelector('#opcoes').querySelectorAll('.opcao')){
            if(opcao.classList.contains('apagado')){
                opcao.classList.remove('apagado');
            }
        }
    }

    reinicaRival(){
        this.rival.querySelector('.img').classList.replace(this.rival.querySelector('.img').classList[1], 'default');
        this.rival.querySelector('p').innerHTML = '';
    }

    inicio(){
        document.querySelector('#msg').querySelector('button').addEventListener('click', ()=>{
            this.zera();
            this.revelaOpcoes();
            this.reinicaRival();
        })
    }
}
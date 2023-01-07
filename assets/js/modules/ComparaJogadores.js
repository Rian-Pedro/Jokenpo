import { rival } from './FazRival.js';
import { CriaMsg } from './CriaMsg.js';

export class ComparaJogadores{
    constructor(jogador){
        this.jogador = jogador;
        this.rival; 
        this.inicio()
    }

    compara(){
        if(this.jogador === this.rival){
            return 'erro';
        }

        if(this.jogador === 'Pedra' && this.rival === 'Tesoura'){
            return true;
        }

        if(this.jogador === 'Papel' && this.rival === 'Pedra'){
            return true;
        }

        if(this.jogador === 'Tesoura' && this.rival === 'Papel'){
            return true;
        }

        return false;
    }

    tese(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                const containerRival = document.querySelector('#rival').querySelector('.img');
                this.rival = containerRival.classList[1];
                const verification = this.compara();
                
                if(verification === 'erro'){
                    reject();
                    return;
                }
                
                new CriaMsg(verification);

            },1000);

        })
    }
    
    async inicio(){
        try{
            await this.tese();
        }catch{
            rival.inicio();
            this.inicio();
        }
    }
}
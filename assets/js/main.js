import { rival } from "./modules/fazRival.js";
import { DeletaOpcoes } from "./modules/DeletaOpcoes.js";
import { ComparaJogadores } from "./modules/ComparaJogadores.js";
import { Reinica } from "./modules/Reinicia.js";

for(let opcao of document.querySelector('#opcoes').querySelectorAll('.img')){
    opcao.addEventListener('click', ()=>{
        rival.inicio();
        new DeletaOpcoes(opcao);
        new ComparaJogadores(opcao.classList[1]);
    });
}

document.querySelector('#msg').querySelector('button').addEventListener('click', ()=>{
    new Reinica();
})
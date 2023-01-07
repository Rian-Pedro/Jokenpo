export class CriaMsg{
    constructor(valor){
        this.valor = valor;
        Object.defineProperty(this, 'resultado', {
            get: ()=>{
                if(this.valor){
                    return 'Você Ganhou!';   
                }
                    return 'Você Perdeu...';
            }
        });
        this.cria();
    }

    liberaMsg(){
        return new Promise(()=>{
            setTimeout(()=>{
                document.querySelector('#msg').classList.remove('apagado');
                document.querySelector('#tituloMSG').innerHTML = this.resultado;
            },500);
        })
    }

    async cria(){
        await this.liberaMsg();
    }

}
class FazRival{
    constructor(opcaos){
        this.rival = document.querySelector('#rival');
        this.imgRival = this.rival.querySelector('.img');
        this.PRival = this.rival.querySelector('p');
        this.opcaos = ['Pedra','Papel','Tesoura'];
        this.intervalo;
        this.valor = 0;
    }

    rand(max = 2, min = 0){
        return Math.floor(Math.random() * (max - min) + min);
    }

    troca(){
        return new Promise(()=>{
            setTimeout(()=>{
                clearInterval(this.intervalo);
                const num = this.rand();
                this.imgRival.classList.replace(this.imgRival.classList[1],this.opcaos[num]);
                this.PRival.innerHTML = this.opcaos[num];
                const teste = this.opcaos.splice(num,1);
                this.opcaos.push(teste[0]);
                return;
            }, 1000)

            this.intervalo = setInterval(()=>{
                this.imgRival.classList.remove(this.imgRival.classList[1]);
                this.imgRival.classList.add(this.opcaos[this.valor]);
                this.PRival.innerHTML = this.opcaos[this.valor]
                if(this.valor > 1){
                    this.valor = 0;
                    return;
                }
                this.valor++;
                return;
            },100)
        })
    }

    async inicio(){
        this.imgRival.classList.remove('default');
        await this.troca();
    }

}

export const rival = new FazRival();
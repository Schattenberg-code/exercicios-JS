function exer3(){

    let mes = 0;
    let gastomes = new Array(11);
    let gastoano = 0;
    let ganhomes = new Array(11);
    let ganhoano = 0;

    let texto = "";

    while(mes != 12){
        ganhomes[mes] = parseFloat(prompt("Quanto voce GANHOU no " + (mes+1) + "o mês"));
        ganhoano += ganhomes[mes];


        gastomes[mes] = parseFloat(prompt("Quanto voce GASTOU no " + (mes+1) + "o mês"));
        gastoano += gastomes[mes];
        mes++;
    }

    texto += ("resumo do ano: \n\n")

    for(let i=0;i<12;i++){
        texto += ("No mês: " + (i+1) + " você ganhou: " +ganhomes[i]) + ("     E gastou: " +gastomes[i] +"\n\n");
    }

    texto += ("No ano você GANHOU um total de: " +ganhoano);
    texto += ("No ano você GASTOU um total de: " +gastoano);

    alert("o resultado está no console.")

    console.log(texto);

    //tentei botar pra mostrar tudo no "Alert" mas o alert limita o tamanho da mensagem :C
}
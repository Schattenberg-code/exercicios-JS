            // exercicio 1 //

function exer1(){

    let soma = 0;
    let continuar = true;

    while(continuar){
        let numero = parseFloat(prompt("Insira um numero para a soma: (digite 0 Para cancelar)"));

        if(isNaN(numero)){
            alert("Por favor insira um valor valido");
        }

        
        if(numero == 0){
            continuar = false;
            return;
        } else {
            soma += numero;
            console.log(soma);
            continuar = confirm("deseja adicionar mais um numero??");
        }
    }
    alert("a soma dos numero é: " + soma);
}


            // exercicio 2 //


function exer2(){

let continuar = true;


    continuar = confirm("cuidado o lançamento vai começar! deseja continuar?")

    if (continuar == false){
        return;
    } else {
        for(let i = 10; i >= 0; i--){
            alert("o lançamento vai começar em: " + i);
        }
    }
    alert("Lançamento concluido");
}


            // exercicio 3 //


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


            // exercicio 4 //


function exer4(){

    let vetor = [];
    let aux;
    let textoembaralha = "";
    let texto = "";

    for(let i = 0; i<4; i++){
        vetor[i] = parseInt(prompt("Insira um numero para o vetor"));
        textoembaralha += (vetor[i]);
        console.log(vetor[i]);
    }

        alert("os numeros escolhidos foram: " + textoembaralha  + " ");

    for(let j = 0; j<4; j++){
    for(let i = 0; i<3; i++){
        if(vetor[i] < vetor[i+1]){
            aux = vetor[i];
            vetor[i] = vetor[i+1]
            vetor[i+1] = aux;
        }
    }
}


    for(let i = 0; i < 4; i++){
        texto += vetor[i] + " ";
    }

    alert("os numeros organizados ficaram: " + texto);

}      


            // exercicio 5 //


function exer5(){

    let numero = 0;

    numero = parseInt(prompt("Insira um numero par ou impar:"));

    //Não faz sentido tranformar um numero par em impar mas imagino que queria que eu verificasse se a divisão por 2 dá 0.
    if(numero % 2 == 0){
        numero+=1
    } else {
        numero+=1
    }

    console.log("O seu número agora é: " + numero);

}       


            // exercicio 6 //


function exer6(){

    let letra = " ";

    letra = (prompt("Insira uma letra para verificar se é vogal ou consoante:"));

    if(/[aeiou]/i.test(letra)) {

        console.log("Essa letra é uma vogal.");
        alert("Essa letra é uma vogal.");

    } else if(/[bcdfghjklmnpqrstvwxyz]/i.test(letra)) {

        console.log("Essa letra é uma consoante.");
        alert("Essa letra é uma consoante.")

    } else {

        console.log("Isso não é uma letra.");
        alert("Isso não é uma letra.");
        
    }

}


            // exerccio 7 //


function exer7(){

    //produtos:
    let preco = {
        a: 1.50, b: 2.50, c: 2.50, d: 3.20, e: 3.40, f: 3.00, g: 3.60, h: 4.00, i: 5.00
    };
    
    let escolha;

    while(escolha != 0){
        escolha = prompt("Qual sabor você deseja selecionar?\n(Digite a letra para escolher e '0' para sair)\n\na - Chocolate R$ 1,50\nb - Morango R$ 2,50\nc - Creme R$ 2,50\nd - Manga R$ 3,20\ne - Melancia R$ 3,40\nf - Vanilla Ice R$ 3,00\ng - Céu Azul R$ 3,60\nh - Brownie R$ 4,00\ni - Hawaiano R$ 5,00");

        if(preco[escolha]){
            alert("Esse custa: R$ " +preco[escolha])
            escolha = 0;
        } else {
            alert("Insira um código válido");
        }
    }
}


            // exercicio 8 //


function exer8(){

    let numero1 = 0;
    let numero2 = 0;

    numero1 = parseInt(prompt("escolha um número inteiro:"));
    numero2 = parseInt(prompt("escolha outro número inteiro:"));

    alert("a diferenção entre esses números é: " + (numero1 - numero2));
    alert("O dobro do primeiro número mais o triplo do segundo é: " + ((2 * numero1) + (3 * numero2)));
    alert("a multiplicação entre os dois números é: " + (numero1 * numero2));
}


            // exercicio 9 //

function exer9(){

    let numero1 = 0;
    let numero2 = 0;

    numero1 = parseInt(prompt("escolha um número inteiro:"));
    numero2 = parseInt(prompt("escolha outro número inteiro:"));

    if(numero1 > numero2){
        alert("Do maior para o menor fica: " + numero1 + ", " + numero2);
        console.log("Do maior para o menor fica: " + numero1 + ", " + numero2);
    } else if(numero2 > numero1){
        alert("Do maior para o menor fica: " + numero2 + ", " + numero1);
        console.log("Do maior para o menor fica: " + numero2 + ", " + numero1);
    } else {
        alert("Os dois números são iguais");
        console.log("Os dois números são iguais");
    }
}


            // exercicio 10 //

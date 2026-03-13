function exer6(){

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
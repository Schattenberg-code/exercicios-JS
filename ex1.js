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
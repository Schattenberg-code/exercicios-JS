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
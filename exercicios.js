//estrutura condicionais
//let nomeVariavel = valor da variavel;
//if (condicao) {
       //console.log(o que acontece?)
//}

let dia = "sexta";
if (dia == "domingo") {
    console.log("Vou para praia.")    
}
else if (dia == "sexta") {
    console.log("Vou para o cinema.")
}
else {
    console.log("Fico em casa.")
}

//outra modo de usar condicional - atribuir as variaveis o tipo de dado
let idade = 0;
let acesso = " ";

if (idade < 16) {
    acesso = "proibido";
}  
else {
    acesso = "permitido";
}
console.log(acesso)


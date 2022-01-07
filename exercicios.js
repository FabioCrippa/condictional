//estrutura condicionais
//const nomeVariavel = valor da variavel;
//if (condicao) {
       //console.log(o que acontece?)
//}

const dia = "sexta";
if (dia == "domingo") {
    console.log("Vou para praia.")    
}
else if (dia == "sexta") {
    console.log("Vou para o cinema.")
}
else {
    console.log("Fico em casa.")
}

//outra estrutura condicional - atribuir as variaveis o tipo de dado
//precisa achar o erro
const idade = 0;
const acesso = " ";
if (idade < 16) {
    acesso = "proibido";
} 
else if (idade >=16 && idade <=18) {
    idade = 19;
} 
else {
    acesso = "permitido";
}

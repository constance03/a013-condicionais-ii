//Recrie o exercício 3 da aula anterior (A012) de condicionais I, utilizando switch-case. 
//No arquivo script,js existe uma versão do código já escrita, mas você pode colar o exercício que você fez na última prática!
let nacionalidade = prompt("digite aqui a nacionalidade").toLowerCase();
switch (nacionalidade) {
    case "brasileira":
        console.log("a pessoa é do Brasil!")
        break;
    case "argentina":
        console.log("a pessoa é da Argentina!")
        break;
    case "uruguaia":
        console.log("a pessoa é Uruguaia!")
        break;
    case "chilena":
        console.log("a pessoa é do Chilena!")
        break;
    case "colombiana":
        console.log("a pessoa é do Comlombiana!")
        break;
    default: console.log("nacionalidade não encontrada")
        break;
}

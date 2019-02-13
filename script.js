
// let nota1 = Number (prompt('Entre com a primeira nota do aluno'));
// let nota2 = Number (prompt('Entre com a segunda nota do aluno'));
// let nota3 = Number (prompt('Entre com a terceira nota do aluno'));

// let media;

// console.log(media)

// media = (nota1 + nota2 + nota3)/3;

// if (media >=7) {
//     alert(` Você foi aprovado com a nota ${media}`)
// }
// else if (media >=6 && media<7){
//     alert(` Você foi para a recuperação ${media}`)
// }
// else {
//     alert(` Você foi reporavdo com a nota ${media}`)
// }
let idade = Number(prompt(` Qual a sua idade?`));

let filme1 = "A coisa";
let filme2 = "Ninja assasino";
let filme3 = "Detona Ralf";
let filme4 = "Kingsman";
let filme5 = "Fragmentado";

console.log(filme1 , filme2 , filme3 , filme4 , filme5)

if (idade >= 18 && idade >= "dezoito" ){
alert(` Você pode assistir ${filme1}, ${filme2}, ${filme3}, ${filme4} e ${filme5}!`)
}
else if (idade <18 && idade >=16){
    alert(` Você apenas pode assistir ${filme4}, ${filme5} e ${filme3}!`)
}

if (idade>=14 && idade <16){
    alert(` Você pode assistir ${filme4} e ${filme3}!`)
}

else if( idade<14){
    alert(` Você só pode assistir ${filme3}!`)
}



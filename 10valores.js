let num = []
let intervalo = []

for(let i = 0; i < 10; i++){

    num[i] = Number (prompt("Digite um numero: "))

}


for (let j = 0; j < 2; j++)
{
    intervalo[j] = Number (prompt("Digite o seu intervalo: "))
}

for(let k = 0; k < 10; k++){

    if(num[k] > intervalo[0] && num[k] < intervalo [1] ){

        console.log(`O numero ${num[k]} está no indice ${k}`)
    }

}
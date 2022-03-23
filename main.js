var simon = []

    for (let i = 1; i < 6; i++) {
            x = Math.floor(Math.random() * 4 +1)
                y = "Il " + i + "° numero é: " + x
                document.getElementById("numerorandom").innerHTML += `<p>${y}</p>`
                simon.push(x)
    }

setTimeout (myFunction, 2000);

console.log(simon)

function myFunction(){
    for (let i = 0; i < 5; i++) {
        y = prompt (`Caccia il ${i}° numero`)
        if (simon[i] != y){
            document.getElementById("risultato").innerHTML = "Imbecille ! Manco cinque numeri riesci a memorizzare !"
        }
        else {
            document.getElementById("risultato").innerHTML = "Bravo hai vinto"
        }
    }
}
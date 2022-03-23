var simon = []
var risposta =[]

    for (let i = 0; i < 5; i++) {
            x = Math.floor(Math.random() * 4 +1)
                document.getElementById("numerorandom").innerHTML = x
                simon.push(x)}


numero(simon)

function numero(simon){
    for (let i = 0; i < 5; i++) {
        setTimeout (numero, 3000)
               function numero () {
                document.getElementById("numerorandom").innerHTML = simon[i]
            };
    }
}



console.log(simon)

// for (let i = 0; i < 5; i++) {
//     y = prompt ("Caccia il" + i + "° numero")
//     if (simon[i] == )

// }








// clearInterval(clock)
// setTimeout (myFunction, 3000);


var simon = []
    for (let i = 0; i < 5; i++) {
            x = Math.floor(Math.random() * 4 +1)
                document.getElementById("numerorandom").innerHTML = x
                simon.push(x)}


numero(simon)

function numero(simon){
    for (let i = 0; i < 5; i++) {
        setTimeout (numero, 1000)
                numero () {
                document.getElementById("numerorandom").innerHTML = simon[i]
            };
    }
}



console.log(simon)

for (let i = 0; i < 5; i++) {
    
}








// clearInterval(clock)
// setTimeout (myFunction, 3000);


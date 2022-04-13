function positions(firstPlace, secondPlace, lastPlace) {
    let podio = [firstPlace, secondPlace, lastPlace]
    if (podio[1] === 'Daniel') {   
        console.log(`1º - Colocado ${podio[1]}`)
        console.log(`2º - Colocado ${podio[0]}`)
        console.log(`3º - Colocado ${podio[2]}`)
   } else if(podio[2] === 'Daniel') {
        console.log(`1º - Colocado ${podio[1]}`)
        console.log(`2º - Colocado ${podio[2]}`)
        console.log(`3º - Colocado ${podio[0]}`)

    } else {
        console.log(`1º - Colocado ${podio[0]}`)
        console.log(`2º - Colocado ${podio[1]}`)
        console.log(`3º - Colocado ${podio[2]}`)
    }
}
positions('Daniel', 'Rafael', 'Manoel')
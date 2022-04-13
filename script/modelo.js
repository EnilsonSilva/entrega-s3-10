
function positions(firstPlace, secondPlace, lastPlace) {
    let podio = [firstPlace, secondPlace, lastPlace]
   if(podio[1] === 'Daniel'){
       return `1º-Colocado ${podio[1]} 2º-Colocado ${podio[0]} 3º-Colocado ${podio[2]}`
   }else if(podio[2] === 'Daniel') {
       return `1º- Colocado ${podio[1]} 2º-Colocado ${podio[2]} 3º-Colocado ${podio[0]}`
   }else{
       return `1º-Colocado ${podio[0]} 2º-Colocado ${podio[1]} 3º-Colocado ${podio[2]}`
   }
}
console.log(positions('Rafael', 'Manoel', 'Daniel'))

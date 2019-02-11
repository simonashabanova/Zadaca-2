function prebaraj() {
    
    var ime = document.getElementById('vlez').value;

    if(ime.length <= 5)
    {
        console.log('Kratko ime');
    }
    else if(ime.length >5 && ime.length <=8){
        console.log('Ime so sredna dolzina');
    }
    else if (ime.length > 8){
        console.log('Dolgo ime');
    }
}

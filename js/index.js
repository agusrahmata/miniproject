//javascript

//Perhitungan luas segitiga
function calculateLuasSegitiga (){
    const alassegitiga = document.getElementById("alassegitiga").value;
    const tinggisegitiga = document.getElementById("tinggisegitiga").value;
    const answer = alassegitiga * tinggisegitiga / 2;
    document.getElementById("inputluassegitiga").value = answer;
}

//Perhitungan keliling segitiga
function calculateKelilingSegitiga (){
    const asegitiga = document.getElementById("a-segitiga").value;
    const bsegitiga = document.getElementById("b-segitiga").value;
    const csegitiga = document.getElementById("c-segitiga").value;
    const answer = Number(asegitiga) + Number(bsegitiga) + Number(csegitiga);
    document.getElementById("inputkelilingsegitiga").value = answer;
}

//Perhitungan luas jajargenjang
function calculateLuasJajargenjang (){
    const alasjajargenjang = document.getElementById("alasjajargenjang").value;
    const tinggijajargenjang = document.getElementById("tinggijajargenjang").value;
    const answer = alasjajargenjang * tinggijajargenjang;
    document.getElementById("inputluasjajargenjang").value = answer;
}

//Perhitungan keliling jajargenjang
function calculateKelilingJajargenjang (){
    const ajajargenjang = document.getElementById("a-jajargenjang").value;
    const bjajargenjang = document.getElementById("b-jajargenjang").value;
    const answer = 2 * ( Number(ajajargenjang) + Number(bjajargenjang) );
    document.getElementById("inputkelilingjajargenjang").value = answer;
}
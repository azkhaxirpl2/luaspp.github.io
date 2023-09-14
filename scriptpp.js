var panjangInput = document.querySelector(".panjang");
var lebarInput = document.querySelector(".lebar");
var calculateButton = document.querySelector(".calculate");
var Luas, panjang, lebar;

function myFunction(){
    panjang = panjangInput.value;
    lebar = lebarInput.value;
    BMI = panjang*(lebar);
    alert("Luas persegi panjang adalah :" + BMI);
}

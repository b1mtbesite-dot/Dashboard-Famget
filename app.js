document.getElementById("peserta").innerHTML="58";
document.getElementById("masuk").innerHTML="Rp8.862.000";
document.getElementById("keluar").innerHTML="Rp1.932.642";
document.getElementById("saldo").innerHTML="Rp6.929.358";

const ctx =
document.getElementById("ukuranChart");

new Chart(ctx,{
type:"bar",

data:{
labels:["S","M","L","XL","XXL"],

datasets:[
{
label:"Ukuran Kaos",

data:[1,9,22,14,12],

backgroundColor:"#6d5dfc"
}
]
}
});
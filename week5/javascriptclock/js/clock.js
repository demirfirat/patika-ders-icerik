//kullanıcını ismini almak için prompt
let userName = prompt("Lütfen isminizi giriniz:");
//aldığımız ismi htmldeki yerine ekliyoruz
document.getElementById('myName').textContent = userName;

//ekranda gösterilecek saat fonksiyonu
function saat(){
    var date = new Date().toLocaleString('tr-TR');
    document.getElementById('myClock').innerHTML = date;
}
setInterval(saat, 1000);
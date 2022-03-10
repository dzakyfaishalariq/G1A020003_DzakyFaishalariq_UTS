// membuat jam dengan setiap detik
setInterval(jamsaya, 500);
function jamsaya(){
    var waktu = new Date();
    var jam = waktu.getHours();
    var menit = waktu.getMinutes();
    var detik = waktu.getSeconds();
    if (jam >= 0 && jam <= 9){
        var ucapan = "Selamat Pagi";
    }else if(jam >= 10 && jam <= 15){
        var ucapan = "Selamat Siang";
    }else if(jam >= 16 && jam <= 18){
        var ucapan = "Selamat Sore";
    }else{
        var ucapan = "Selamat Malam";
    }
    var jam_digital = jam + ":" + menit + ":" + detik;
    document.getElementById("jam").innerHTML = jam_digital;
    document.getElementById("ucapan").innerHTML = ucapan;
}
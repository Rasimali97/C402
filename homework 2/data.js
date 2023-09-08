var data = [];

       
document.getElementById("qeydiyyatForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    
    var ad = document.getElementById("ad").value;
    var soyad = document.getElementById("soyad").value;
    var yas = parseInt(document.getElementById("yas").value);
    var sifre = document.getElementById("sifre").value;
    var email = document.getElementById("email").value;
    var cins = document.getElementById("cins").value;

    
    var hobbi = [];
    var hobbiCheckBoxes = document.querySelectorAll('input[name="hobbi"]:checked');
    hobbiCheckBoxes.forEach(function (checkbox) {
        hobbi.push(checkbox.value);
    });

    if (ad.length < 3) {
        alert("Adınız 3 hərfdən az ola bilməz.");
        return;
    }

    if (soyad.length < 3) {
        alert("Soyadınız 3 hərfdən az ola bilməz.");
        return;
    }

    if (yas < 18) {
        alert("Yaşınız 18-dən kiçikdir. Qeydiyyatdan keçə bilməzsiniz.");
        return;
    }
    
    var user = {
        ad: ad,
        soyad: soyad,
        yas: yas,
        sifre: sifre,
        email: email,
        cins: cins,
        hobbi: hobbi
    };
    

    data.push(user);
    console.log("Son data:", data);
    document.getElementById("qeydiyyatForm").reset(); 

    printNames(data); //adları ekrana verən funksiya
    printObject(data); //obyektləri ekrana verən funksiya
    printFullname(data); // tam adı ekrana verən funksiya
});

function formuTemizle() {
    document.getElementById("ad").value = "";
    document.getElementById("soyad").value = "";
    document.getElementById("yas").value = "";
    document.getElementById("sifre").value = "";
    document.getElementById("email").value = "";
    
    document.getElementById("cins").selectedIndex = 0;

    var hobbiCheckBoxes = document.querySelectorAll('input[name="hobbi"]');
    hobbiCheckBoxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
}
document.getElementById("temizle").addEventListener("click", formuTemizle);

function printNames(data){
    for(i=0; i<data.length;i++){
        console.log("Ad: ",data[i].ad);
    }
}


function printObject(data){
    for(i=0; i<data.length;i++){
        console.log("Her object: ",data[i]);
    }
}

function printFullname(data){
    for(i=0; i<data.length;i++){
        console.log("Tam ad: ",data[i].ad + " " + data[i].soyad);
    }
}
















// Eyni zamanda iki ədəd arasında toplama, çıxma, vurma, bölmə əməliyyatlarını yerinə yetirən funsiya yazın. Funksiya dinamik olmalıdır yəni ədədləri parametr olaraq almalıdır.



function calc(sayi1, sayi2, hesabemeli) {
    var netice = 0;

    if (hesabemeli === "toplama") {
        netice = sayi1 + sayi2;
    } else if (hesabemeli === "cixma") {
        netice = sayi1 - sayi2;
    } else if (hesabemeli === "vurma") {
        netice = sayi1 * sayi2;
    } else if (hesabemeli === "bolme") {
        if (sayi2 !== 0) {
            netice = sayi1 / sayi2;
        } else {
            console.error("Sıfıra bölmə qadağandır.");
        }
    } else {
        console.error("Yanlış sorgu.");
    }

    return netice;
}

var toplama = calc(5, 3, "toplama");
console.log("Toplama: " + toplama);

var cixma = calc(8, 2, "cixma");
console.log("Çıxma: " + cixma);

var vurma = calc(4, 6, "vurma");
console.log("Vurma: " + vurma);

var bolme = calc(10, 2, "bolme");
console.log("Bölmə: " + bolme);








//Ədədin tək və ya cüt olduğunu təyin edən funksiya yazın. Funksiya dinamik olmalıdır yəni ədədi parametr olaraq almalıdır.

function tekcut(eded) {
    if (eded % 2 === 0) {
        return "Cüt";
    } else {
        return "Tək";
    }
}
var eded1 = 7;
var eded2 = 12;

console.log(eded1 + " " + tekcut(eded1));
console.log(eded2 + " " + tekcut(eded2));

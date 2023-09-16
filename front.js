const form = document.querySelector (".form")
const ID = document.querySelector (".ID")
const ad = document.querySelector (".ad")
const soyad = document.querySelector (".soyad")
const pass = document.querySelector (".pass")
const adres = document.querySelector (".adres")

form.addEventListener ("submit", function (e) {

    e.preventDefault ();

        let obj = {};
        obj.ID = ID.value;
        obj.ad = ad.value;
        obj.soyad = soyad.value;
        obj.pass = pass.value;
        obj.adres = adres.value;
      
        console.log (obj);
})
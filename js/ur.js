//vis template i DOM

document.addEventListener("DOMContentLoaded", hentJson);

let mm41;
let min41mmTemplate = document.querySelector("#myTemplate");

//hent json
async function hentJson() {
    let jsonObjekt = await fetch("http://augustabondo.dk/aarsopgave/wordpress/wp-json/wp/v2/41_mm");
    //vis objekt som json
    mm41 = await jsonObjekt.json();
    vis41mm();
}
//lav klon af template

function vis41mm() {
    //console.log(observationer);
    //kør json array´et igennem og lav en klon af template
    mm41.forEach(ur => {
        let klon = min41mmTemplate.cloneNode(true).content;
        klon.querySelector("[data-billede]").src = ur.acf.billede.url;
        klon.querySelector("[data-navn]").innerHTML = ur.title.rendered;
        klon.querySelector("[data-pris]").textContent = ur.acf.pris;

        document.querySelector(".templateModtager").appendChild(klon);
    })
}

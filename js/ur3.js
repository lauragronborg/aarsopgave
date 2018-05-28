document.addEventListener("DOMContentLoaded", hentJson);
let watchstrap;
let minStrapTemplate = document.querySelector("#myTemplate3");

//hent json
async function hentJson() {
    let jsonObjekt = await fetch("http://augustabondo.dk/aarsopgave/wordpress/wp-json/wp/v2/watch_strap");
    //vis objekt som json
    watchstrap = await jsonObjekt.json();
    viswatchstrap();
}

//lav klon af template

function viswatchstrap() {
    //console.log(observationer);
    //kør json array´et igennem og lav en klon af template
    watchstrap.forEach(strap => {
        let klon = minStrapTemplate.cloneNode(true).content;
        klon.querySelector("[data-billede]").src = strap.acf.billede.url;
        klon.querySelector("[data-navn]").innerHTML = strap.title.rendered;
        klon.querySelector("[data-pris]").textContent = strap.acf.pris;

        document.querySelector(".templateModtager3").appendChild(klon);

    })

}

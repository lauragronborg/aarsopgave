document.addEventListener("DOMContentLoaded", hentJson);
let mm37;
let min37mmTemplate = document.querySelector("#myTemplate2");

//hent json
async function hentJson() {
    let jsonObjekt = await fetch("http://augustabondo.dk/aarsopgave/wordpress/wp-json/wp/v2/37_mm");
    //vis objekt som json
    mm37 = await jsonObjekt.json();
    vis37mm();
}

//lav klon af template

function vis37mm() {
    //console.log(observationer);
    //kør json array´et igennem og lav en klon af template
    mm37.forEach(ur => {
        let klon = min37mmTemplate.cloneNode(true).content;
        klon.querySelector("[data-billede]").src = ur.acf.billede.url;
        klon.querySelector("[data-navn]").innerHTML = ur.title.rendered;
        klon.querySelector("[data-pris]").textContent = ur.acf.pris;

        document.querySelector(".templateModtager2").appendChild(klon);

    })

}

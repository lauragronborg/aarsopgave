//vis template i DOM

document.addEventListener("DOMContentLoaded", hentJson);

let mm41;
let minTemplate = document.querySelector("#myTemplate");

//hent json
async function hentJson() {
    let jsonObjekt = await fetch("http://augustabondo.dk/aarsopgave/wordpress/wp-json/wp/v2/posts/110");
    //vis objekt som json
    mm41 = await jsonObjekt.json();
    vis41mm();
}
//lav klon af template

function vis41mm() {
    //console.log(observationer);
    //kør json array´et igennem og lav en klon af template
    mm41.forEach(ur => {
        let klon = minTemplate.cloneNode(true).content;
        klon.querySelector("[data-titel]").innerHTML = ur.title.rendered;
        klon.querySelector("[data-tekst]").innerHTML = ur.content.rendered;

        document.querySelector(".templateModtager").appendChild(klon);
    })
}

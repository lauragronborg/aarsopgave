document.addEventListener("DOMContentLoaded", hentJson);
let watchroll;
let minRollTemplate = document.querySelector("#myTemplate4");

//hent json
async function hentJson() {
    let jsonObjekt = await fetch("http://augustabondo.dk/aarsopgave/wordpress/wp-json/wp/v2/watch_rolls");
    //vis objekt som json
    watchroll = await jsonObjekt.json();
    viswatchroll();
}

//lav klon af template

function viswatchroll() {
    //console.log(observationer);
    //kør json array´et igennem og lav en klon af template
    watchroll.forEach(roll => {
        let klon = minRollTemplate.cloneNode(true).content;
        klon.querySelector("[data-billede]").src = roll.acf.billede.url;
        klon.querySelector("[data-navn]").innerHTML = roll.title.rendered;
        klon.querySelector("[data-pris]").textContent = roll.acf.pris;

        document.querySelector(".templateModtager4").appendChild(klon);

    })

}

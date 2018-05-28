document.addEventListener("DOMContentLoaded", hentJson);
let coffeebook;
let minCoffeebookTemplate = document.querySelector("#myTemplate5");

//hent json
async function hentJson() {
    let jsonObjekt = await fetch("http://augustabondo.dk/aarsopgave/wordpress/wp-json/wp/v2/coffee_table_books");
    //vis objekt som json
    coffeebook = await jsonObjekt.json();
    viscoffeebook();
}

//lav klon af template

function viscoffeebook() {
    //console.log(observationer);
    //kør json array´et igennem og lav en klon af template
    coffeebook.forEach(book => {
        let klon = minCoffeebookTemplate.cloneNode(true).content;
        klon.querySelector("[data-billede]").src = book.acf.billede.url;
        klon.querySelector("[data-navn]").innerHTML = book.title.rendered;
        klon.querySelector("[data-pris]").textContent = book.acf.pris;

        document.querySelector(".templateModtager5").appendChild(klon);

    })

}

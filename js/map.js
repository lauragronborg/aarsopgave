//vis template i DOM

document.addEventListener("DOMContentLoaded", hentJson);

let about;
let minTemplate = document.querySelector("#myTemplate");

//hent json
async function hentJson() {
    let jsonObjekt = await fetch("http://augustabondo.dk/aarsopgave/wordpress/wp-json/wp/v2/posts/104");
    //vis objekt som json
    about = await jsonObjekt.json();
    visAbout();
}
//lav klon af template

function visAbout() {
    //console.log(observationer);
    //kør json array´et igennem og lav en klon af template
    about.forEach(ur => {
        let klon = minTemplate.cloneNode(true).content;
        klon.querySelector("[data-titel]").innerHTML = ur.title.rendered;
        klon.querySelector("[data-tekst]").innerHTML = ur.content.rendered;
        klon.querySelector("[data-billede]").src = ur.acf.billede.url;


        document.querySelector(".templateModtager").appendChild(klon);
    })
}

function initMap() {

    //koordinater for kortets centrum

    //DANMARK
    let AROS = {
        lat: 56.1539075,
        lng: 10.199676100000033
    };
    let CHHO = {
        lat: 55.6920745,
        lng: 12.5580334
    };
    let CYKLISTBUTIKKEN = {
        lat: 55.6831562,
        lng: 12.567549800000052
    };
    let DAMERNESMAGASIN = {
        lat: 55.6926442,
        lng: 12.543851700000005
    };
    let DRADAMS = {
        lat: 55.3951119,
        lng: 10.386255699999992
    };
    let FABRIKANTERNE = {
        lat: 55.71191899999999,
        lng: 9.535562000000027
    };
    let FLAVOUR = {
        lat: 55.68002070000001,
        lng: 12.57510990000003
    };
    let FRÖKEN = {
        lat: 55.33014259999999,
        lng: 8.766269800000032
    };
    let HRP = {
        lat: 55.7573436,
        lng: 8.92666220000001
    };
    let HR_P = {
        lat: 55.7363487,
        lng: 8.18602020000003
    };
    let KAUPP = {
        lat: 54.7659745,
        lng: 11.868804700000055
    };
    let LOUISIANA = {
        lat: 55.96916239999999,
        lng: 12.542322499999955
    };
    let NATIVENORTH = {
        lat: 55.6894608,
        lng: 12.55770259999997
    };
    let NESTOR = {
        lat: 55.3962838,
        lng: 10.3826636
    };
    let PH = {
        lat: 55.7363487,
        lng: 8.18602020000003
    };
    let RINGDALREGITZE = {
        lat: 55.6409964,
        lng: 12.082438799999977
    };
    let RUDVESTER = {
        lat: 55.64099,
        lng: 12.085448499999984
    };
    let TOWNSFOLK = {
        lat: 55.6795985,
        lng: 12.53391780000004
    };
    let WARDROBE19 = {
        lat: 55.6786797,
        lng: 12.568977000000018
    };
    let SEASONSDESIGN = {
        lat: 55.6855734,
        lng: 12.537200999999982
    };
    //AUSTRALIEN
    let HARDTOFIND = {
        lat: -33.9108041,
        lng: 151.1957777
    };

    //BELGIEN

    let HELT = {
        lat: 50.8818129,
        lng: 4.711627200000066
    };

    // CANADA
    let EPHAPPAREL = {
        lat: 49.8905158,
        lng: -97.14072069999997
    };
    let EPH_APPAREL = {
        lat: 51.0436323,
        lng: -114.07986549999998
    };

    // TJEKKIET

    let ZOOT = {
        lat: 49.22118589999999,
        lng: 16.5960503
    };

    // KINA

    let SECOO = {
        lat: 36.665007,
        lng: 117.02706599999999
    };

    //FINLAND
    let IVALO = {
        lat: 61.92410999999999,
        lng: 25.748151099999973
    };

    // HOLLAND
    let FRESHCOTTON = {
        lat: 52.3615021,
        lng: 4.9012694000000465
    };
    let THEGOODPEOPLE = {
        lat: 51.923383,
        lng: 4.488093899999967
    };
    let STEDELIJKMUSEUM = {
        lat: 52.358011,
        lng: 4.879755599999953
    };
    let VELOUR = {
        lat: 52.3688839,
        lng: 4.885768399999961
    };

    //RUMÆNIEN
    let ZOOTRO = {
        lat: 45.943161,
        lng: 24.966760000000022
    };

    //SLOVAKIET
    let ZOOTSK = {
        lat: 48.669026,
        lng: 19.69902400000001
    };

    //SPANIEN
    let TEQUILASUNSET = {
        lat: 41.6547021,
        lng: -0.8787270000000262
    };
    //ENGLAND
    let THEPOMMIER = {
        lat: 51.514691,
        lng: -0.1259099999999762
    };
    let WOLFBADGERUK = {
        lat: 51.5265618,
        lng: -0.08008380000001125
    };

    //USA
    let BLACKMARKET = {
        lat: 34.0400233,
        lng: -118.44249669999999
    };
    let SANFRANCISCOMUSEUM = {
        lat: 37.7859072,
        lng: -122.40080030000001
    };
    let TICTAILMARKET = {
        lat: 40.7181814,
        lng: -73.99004969999999
    };
    let LUCKYRUBBERDUCKY = {
        lat: 40.67110460000001,
        lng: -73.97829680000001
    };
    let VERTIGOHOME = {
        lat: 33.5305437,
        lng: -117.77304670000001
    };

    let WOLFBADGER = {
        lat: 40.7214047,
        lng: -74.00198710000001
    };

    // opretter et kort
    let map = new google.maps.Map(document.querySelector('#map'), {
        //zoom level
        zoom: 2.5,
        center: HELT
    });


    //indsæt marker
    let marker = new google.maps.Marker({
        //position
        position: AROS,
        //hvilket kort skal marker vises på
        map: map
    });

    let marker2 = new google.maps.Marker({
        position: CHHO,
        map: map
    });

    let marker3 = new google.maps.Marker({
        position: CYKLISTBUTIKKEN,
        map: map
    });

    let marker4 = new google.maps.Marker({
        position: DAMERNESMAGASIN,
        map: map
    });
    let marker5 = new google.maps.Marker({
        position: DRADAMS,
        map: map
    });
    let marker6 = new google.maps.Marker({
        position: FABRIKANTERNE,
        map: map
    });
    let marker7 = new google.maps.Marker({
        position: FLAVOUR,
        map: map
    });
    let marker8 = new google.maps.Marker({
        position: FRÖKEN,
        map: map
    });
    let marker9 = new google.maps.Marker({
        position: HRP,
        map: map
    });
    let marker10 = new google.maps.Marker({
        position: HR_P,
        map: map
    });
    let marker11 = new google.maps.Marker({
        position: KAUPP,
        map: map
    });
    let marker12 = new google.maps.Marker({
        position: LOUISIANA,
        map: map
    });
    let marker13 = new google.maps.Marker({
        position: NATIVENORTH,
        map: map
    });
    let marker14 = new google.maps.Marker({
        position: NESTOR,
        map: map
    });
    let marker15 = new google.maps.Marker({
        position: PH,
        map: map
    });
    let marker16 = new google.maps.Marker({
        position: RINGDALREGITZE,
        map: map
    });

    let marker17 = new google.maps.Marker({
        position: RUDVESTER,
        map: map
    });
    let marker18 = new google.maps.Marker({
        position: TOWNSFOLK,
        map: map
    });
    let marker19 = new google.maps.Marker({
        position: WARDROBE19,
        map: map
    });
    let marker20 = new google.maps.Marker({
        position: SEASONSDESIGN,
        map: map
    });
    let marker21 = new google.maps.Marker({
        position: HELT,
        map: map
    });
    let marker22 = new google.maps.Marker({
        position: EPHAPPAREL,
        map: map
    });
    let marker23 = new google.maps.Marker({
        position: EPH_APPAREL,
        map: map
    });
    let marker24 = new google.maps.Marker({
        position: THEGOODPEOPLE,
        map: map
    });
    let marker25 = new google.maps.Marker({
        position: STEDELIJKMUSEUM,
        map: map
    });
    let marker26 = new google.maps.Marker({
        position: VELOUR,
        map: map
    });
    let marker27 = new google.maps.Marker({
        position: TEQUILASUNSET,
        map: map
    });
    let marker28 = new google.maps.Marker({
        position: BLACKMARKET,
        map: map
    });
    let marker29 = new google.maps.Marker({
        position: SANFRANCISCOMUSEUM,
        map: map
    });
    let marker30 = new google.maps.Marker({
        position: TICTAILMARKET,
        map: map
    });
    let marker31 = new google.maps.Marker({
        position: LUCKYRUBBERDUCKY,
        map: map
    });
    let marker32 = new google.maps.Marker({
        position: VERTIGOHOME,
        map: map
    });
    let marker33 = new google.maps.Marker({
        position: WOLFBADGER,
        map: map
    });
    let marker34 = new google.maps.Marker({
        position: HARDTOFIND,
        map: map
    });
    let marker35 = new google.maps.Marker({
        position: ZOOT,
        map: map
    });
    let marker36 = new google.maps.Marker({
        position: SECOO,
        map: map
    });
    let marker37 = new google.maps.Marker({
        position: IVALO,
        map: map
    });
    let marker38 = new google.maps.Marker({
        position: IVALO,
        map: map
    });
    let marker39 = new google.maps.Marker({
        position: FRESHCOTTON,
        map: map
    });
    let marker40 = new google.maps.Marker({
        position: ZOOTRO,
        map: map
    });
    let marker41 = new google.maps.Marker({
        position: ZOOTSK,
        map: map
    });
    let marker42 = new google.maps.Marker({
        position: THEPOMMIER,
        map: map
    });
    let marker43 = new google.maps.Marker({
        position: WOLFBADGERUK,
        map: map
    });
}

const head = [{
        "bougeable": "bougeable_moche",
        "head_link": "assets/maniere/png_empiles/pics/tete.png",
        "head_id": "tete_moche",
        "bouche_zero_link": "assets/maniere/png_empiles/pics/bouche_zero.png",
        "bouche_zero_id": "bouche_zero_moche",
        "bouche_link": "assets/maniere/png_empiles/pics/_bouche_un.png",
        "bouche_id": "bouche_moche"
    }

]
let heads = head[0];
let generate = '<div id ="' + heads.bougeable + '">';
generate += '<img src="' + heads.head_link + '" id ="' + heads.head_id + '"/>';
generate += '<img src="' + heads.bouche_zero_link + '" id ="' + heads.bouche_zero_id + '"/>';
generate += '<img src="' + heads.bouche_link + '" id ="' + heads.bouche_id + '"/>';
generate += '</div>';
document.getElementById("ca_png_empiles").innerHTML = generate;



let tete_moche = document.getElementById(heads.head_id);
let bouche_fixe_moche = document.getElementById(heads.bouche_zero_id);
let bouche_moche = document.getElementById(heads.bouche_id);









function png_empiles() {
    //On impose une limite à la machoire !
    if (average < max + sensi) {
        bouche_moche.style.transform = "translateY(" + Math.round(average) / 2 + "px)";
        tete_moche.style.transform = "scale(" + (Math.round(average) / 100 + 1) + "," + (Math.round(average) / 500 + 1) + ")"
    } else {
        bouche_moche.style.transform = "translateY(" + max + "px)";
        tete_moche.style.transform = "scale(" + (Math.round(average) / 100 + 1) + "," + (Math.round(average) / 500 + 1) + ")"
    }
}
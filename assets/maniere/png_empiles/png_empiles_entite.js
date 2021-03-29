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
    if (average < 60 + sensi) {
        bouche_moche.style.transform = "translateY(" + Math.round(average) / 2 + "px)";
        tete_moche.style.transform = "scale(" + (Math.round(average) / 100 + 1) + "," + (Math.round(average) / 500 + 1) + ")"
    } else {
        bouche_moche.style.transform = "translateY(" + 30 + "px)";
        tete_moche.style.transform = "scale(" + (Math.round(average) / 100 + 1) + "," + (Math.round(average) / 500 + 1) + ")"
    }
}
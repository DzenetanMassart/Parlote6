document.getElementById("ca_multipng").innerHTML = '<img class="chara" src="' + frame[0].image + '"' + taille + '/>';



function multi_png() {
    if (average < 20 + sensi) {
        document.getElementById("ca_multipng").innerHTML = '<img class="chara" src="' + frame[0].image + '"' + taille + '/>';
    } else if (average > 20 + sensi && average < 40 + sensi) {
        document.getElementById("ca_multipng").innerHTML = '<img class="chara" src="' + frame[1].image + '"' + taille + '/>';
    } else if (average > 40 + sensi && average < 60 + sensi) {
        document.getElementById("ca_multipng").innerHTML = '<img class="chara" src="' + frame[2].image + '"' + taille + '/>';
    } else if (average > 60 + sensi && average < 80 + sensi) {
        document.getElementById("ca_multipng").innerHTML = '<img class="chara" src="' + frame[3].image + '"' + taille + '/>';
    } else if (average > 80 + sensi && average < 100 + sensi) {
        document.getElementById("ca_multipng").innerHTML = '<img class="chara" src="' + frame[4].image + '"' + taille + '/>';
    } else {
        document.getElementById("ca_multipng").innerHTML = '<img class="chara" src="' + frame[5].image + '"' + taille + '/>';
    }

}
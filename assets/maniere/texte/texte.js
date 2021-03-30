document.getElementById("ca_texte").innerHTML = '<span class="text_face">(:|)</span>';

function texte() {

    if (average < min + sensi) {
        document.getElementById("ca_texte").innerHTML = '<span class="text_face">(:|)</span>';
    } else if (average > min + sensi && average < (min * 2) + sensi) {
        document.getElementById("ca_texte").innerHTML = '<span class="text_face">(:p)</span>';
    } else if (average > (min * 2) + sensi && average < (min * 3) + sensi) {
        document.getElementById("ca_texte").innerHTML = '<span class="text_face">(:D)</span>';
    } else {
        document.getElementById("ca_texte").innerHTML = '<span class="text_face">(:O)</span>';
    }
}
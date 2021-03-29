document.getElementById("ca_texte").innerHTML = '<span class="text_face">(:|)</span>';

function texte() {

    if (average < 25 + sensi) {
        document.getElementById("ca_texte").innerHTML = '<span class="text_face">(:|)</span>';
    } else if (average > 25 + sensi && average < 50 + sensi) {
        document.getElementById("ca_texte").innerHTML = '<span class="text_face">(:p)</span>';
    } else if (average > 50 + sensi && average < 75 + sensi) {
        document.getElementById("ca_texte").innerHTML = '<span class="text_face">(:D)</span>';
    } else {
        document.getElementById("ca_texte").innerHTML = '<span class="text_face">(:O)</span>';
    }
}
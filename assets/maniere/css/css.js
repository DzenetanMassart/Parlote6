document.getElementById("ca_css").innerHTML = '<div id="png0" class="parlote_png disabled"></div>';

function css() {
    if (average < 25 + sensi) {
        document.getElementById("ca_css").innerHTML = '<div id="png0" class="parlote_png disabled"></div>';
    } else if (average > 25 + sensi && average < 50 + sensi) {
        document.getElementById("ca_css").innerHTML = '<div id="png1" class="parlote_png1 disabled"></div>';
    } else if (average > 50 + sensi && average < 75 + sensi) {
        document.getElementById("ca_css").innerHTML = '<div id="png2" class="parlote_png2 disabled"></div>';
    } else {
        document.getElementById("ca_css").innerHTML = '<div id="png3" class="parlote_png3 disabled"></div>';
    }

}
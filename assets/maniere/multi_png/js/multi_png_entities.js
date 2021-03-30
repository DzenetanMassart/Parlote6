let frame = [{
        "image": "assets/maniere/multi_png/1.png",
    },
    {
        "image": "assets/maniere/multi_png/2.png",
    },
    {
        "image": "assets/maniere/multi_png/3.png",
    },
    {
        "image": "assets/maniere/multi_png/4.png",
    },
    {
        "image": "assets/maniere/multi_png/5.png",
    },
    {
        "image": "assets/maniere/multi_png/6.png",
    }
]
document.getElementById('ca_multipng').innerHTML = '<img class="chara" src="' + frame[0].image + '"' + taille + '/>';



function multi_png() {
    if (average < min + sensi) {
        document.getElementById("ca_multipng").innerHTML = '<img class="chara" src="' + frame[0].image + '"' + taille + '/>';
    } else if (average > min + sensi && average < (min * 2) + sensi) {
        document.getElementById("ca_multipng").innerHTML = '<img class="chara" src="' + frame[1].image + '"' + taille + '/>';
    } else if (average > (min * 2) + sensi && average < (min * 3) + sensi) {
        document.getElementById("ca_multipng").innerHTML = '<img class="chara" src="' + frame[2].image + '"' + taille + '/>';
    } else if (average > (min * 3) + sensi && average < (min * 4) + sensi) {
        document.getElementById("ca_multipng").innerHTML = '<img class="chara" src="' + frame[3].image + '"' + taille + '/>';
    } else if (average > (min * 4) + sensi && average < (min * 5) + sensi) {
        document.getElementById("ca_multipng").innerHTML = '<img class="chara" src="' + frame[4].image + '"' + taille + '/>';
    } else {
        document.getElementById("ca_multipng").innerHTML = '<img class="chara" src="' + frame[5].image + '"' + taille + '/>';
    }

}
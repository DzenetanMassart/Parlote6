// On gère l'intensité
let array;
let values;
let length;
let average;
const taille = 'style="width:200px"';

/* La sensibilité ajoutée */
let sensi = 0;
const sensi_take = document.getElementById("sensibilite");
const sensi_view = document.getElementById("sensibilite_view");


function sensibilite() {
    sensi = sensi_take.value;
    sensi_view.innerText = sensi;
    console.log(sensi);
}

// Allez, on regère l'intensité après cet interlude ! 
navigator.mediaDevices.getUserMedia({ audio: true, video: false })
    .then(function(stream) {
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

        analyser.smoothingTimeConstant = 0.8;
        analyser.fftSize = 1024;

        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);
        javascriptNode.onaudioprocess = function() {
            array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            values = 0;

            length = array.length;
            for (let i = 0; i < length; i++) {
                values += (array[i]);
            }

            average = values / length;
            // Canvas empilés
            canvas_empiles();
            // PNGs empilés
            png_empiles();
            // MultiPNGs
            multi_png();
            // CSS
            css();
            // Texte
            texte();

            document.getElementById("intensite_sonore").innerHTML = average;
        }
    })
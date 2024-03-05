let sound = new Audio('som/mouse-click-sound.mp3');

let buttonEncoder = document.getElementById('encode')
let buttonDecoder = document.getElementById('decode')
let textarea  = document.getElementById('textInput');
let decoder = document.getElementById('decoder');
let mensagem = document.getElementById('message');

buttonEncoder.addEventListener('click', function(){
    textarea.style.animation = ""
    setTimeout(() => textarea.style.animation = "buttonGlitch .5s linear", 5)
    decoder.style.animation = ""
    setTimeout(() => decoder.style.animation = "buttonGlitch .5s linear, 5", 5) 
    sound.play()
    sound.volume = 0.1
    sound.playbackRate = 1.5
});

buttonDecoder.addEventListener('click', function(){
    textarea.style.animation = ""
    setTimeout(() => textarea.style.animation = "buttonGlitch .5s linear", 5)
    decoder.style.animation = ""
    setTimeout(() => decoder.style.animation = "buttonGlitch .5s linear, 5", 5) 
    sound.play()
    sound.volume = 0.1
    sound.playbackRate = 1.5
});


function codificar(){
    let text = textarea.value;

    let criptoText = text.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    mensagem.innerHTML = criptoText;
}

function decodificar(){
    let text = textarea.value;

    var decriptoText = text.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u');

    document.getElementById('message').innerHTML = decriptoText; 
}

function copiar(){
    let copyText = document.getElementById('message').innerHTML;
    console.log(copyText);

    navigator.clipboard.writeText(copyText);
    alert(`A palavra "${copyText}" foi copiada`);
}
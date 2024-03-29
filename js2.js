//enquanto o outro javascript convertia as letras maiusculas e acentos
//este arquivo javascript ele possui a função de alerta caso o usuario digite os mesmos

const entradaTextarea = document.getElementById('entrada');
const ocultoDiv = document.getElementById('oculto');
const ocultoTextarea = document.getElementById('saida');

function criptografar() {
    const texto = document.getElementById("entrada").value;
    if (/[\u00C0-\u017F]/.test(texto) || /[A-Z]/.test(texto)) {
        alert("Por favor, insira apenas letras minúsculas e sem acentos!");
    } else {
        const textoOriginal = document.getElementById('entrada').value;
        const textoCriptografado = criptografarTexto(textoOriginal);
        document.getElementById('saida').value = textoCriptografado;
        if (entradaTextarea.value.trim() === '') {
            ocultoDiv.classList.add('oculto');
            const revelados = document.querySelectorAll('.revelado');
            for (let i = 0; i < revelados.length; i++) {
                revelados[i].classList.remove('oculto');
            }
        } else {
            ocultoDiv.classList.remove('oculto');
            const revelados = document.querySelectorAll('.revelado');
            for (let i = 0; i < revelados.length; i++) {
                revelados[i].classList.add('oculto');
            }
        }
    }
}
            
function descriptografar() {    
    const texto = document.getElementById("entrada").value;
    if (/[\u00C0-\u017F]/.test(texto) || /[A-Z]/.test(texto)) {
        alert("Por favor, insira apenas letras minúsculas e sem acentos!");
    } else {
        const textoOriginal = document.getElementById('entrada').value;
        const textoDescriptografado = descriptografarTexto(textoOriginal);
        document.getElementById('saida').value = textoDescriptografado;
        if (entradaTextarea.value.trim() === '') {
            ocultoDiv.classList.add('oculto');
            const revelados = document.querySelectorAll('.revelado');
            for (let i = 0; i < revelados.length; i++) {
                revelados[i].classList.remove('oculto');
            }    
        } else {
            ocultoDiv.classList.remove('oculto');
            const revelados = document.querySelectorAll('.revelado');
            for (let i = 0; i < revelados.length; i++) {
                revelados[i].classList.add('oculto');
            }
        }
    }
}

entradaTextarea.addEventListener('input', function() {
    if (entradaTextarea.value.trim() === '') {
        ocultoTextarea.value = entradaTextarea.value;
        document.getElementById('revelado').classList.remove('oculto');
        document.getElementById('revelado1').classList.remove('oculto');
        document.getElementById('oculto').classList.remove('revelado');
        ocultoDiv.classList.add('oculto');
    }
});
            
function criptografarTexto(texto) {
    texto = texto.replace(/e/g, 'enter');
    texto = texto.replace(/i/g, 'imes');
    texto = texto.replace(/a/g, 'ai');
    texto = texto.replace(/o/g, 'ober');
    texto = texto.replace(/u/g, 'ufat');
    return texto;
}

function descriptografarTexto(textoCriptografado) {
    textoCriptografado = textoCriptografado.replace(/enter/g, 'e');
    textoCriptografado = textoCriptografado.replace(/imes/g, 'i');
    textoCriptografado = textoCriptografado.replace(/ai/g, 'a');
    textoCriptografado = textoCriptografado.replace(/ober/g, 'o');
    textoCriptografado = textoCriptografado.replace(/ufat/g, 'u');
    return textoCriptografado;
}

function copiarTexto() {
    var textarea = document.getElementById("saida");
    textarea.select();
    navigator.clipboard.writeText(textarea.value).then(function() {
    }, function(err) {
        console.error('Erro ao copiar texto: ', err);
    });
}
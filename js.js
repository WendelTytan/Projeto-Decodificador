            // Selecionando os elementos relevantes
            const entradaTextarea = document.getElementById('entrada');
            const ocultoDiv = document.getElementById('oculto');
            const ocultoTextarea = document.getElementById('saida');

            function criptografar() {

            // Preenchendo o textarea oculto com o valor do textarea de entrada
            //ocultoTextarea.value = entradaTextarea.value;

            const textoOriginal = document.getElementById('entrada').value.toLowerCase();
            const textoLimpo = removerAcentos(textoOriginal);
            const textoCriptografado = criptografarTexto(textoLimpo);
            document.getElementById('saida').value = textoCriptografado;

                // Verificando se o textarea de entrada está vazio
                if (entradaTextarea.value.trim() === '') {
                    // Se estiver vazio, mantenha a classe "revelado" revelada
                    ocultoDiv.classList.add('oculto');
                    const revelados = document.querySelectorAll('.revelado');
                    for (let i = 0; i < revelados.length; i++) {
                        revelados[i].classList.remove('oculto');
                        //revelados[i].classList.toggle('oculto');
                        //toggle é melhor que adicionar e remover
                    }
                    console.log("if");

                // Selecionando o textarea pelo ID
                //const distextarea = document.getElementById('saida');

                // Desativando o input de texto no textarea dá para colocar diretamente nele
                //distextarea.disabled = true;
                // distextarea.style.color = '#495057';
                //revelados[i].classList.add('oculto');

                } else {
                    // Se não estiver vazio, oculte os elementos revelados
                    ocultoDiv.classList.remove('oculto');
                    const revelados = document.querySelectorAll('.revelado');
                    for (let i = 0; i < revelados.length; i++) {
                        revelados[i].classList.add('oculto');
                        //revelados[i].classList.toggle('oculto');
                        //toggle é melhor que adicionar e remover
                    }
                    console.log("else");

                                    // Selecionando o textarea pelo ID
                //const distextarea = document.getElementById('saida');

                // Desativando o input de texto no textarea dá para colocar diretamente nele
                // distextarea.disabled = true;
                // distextarea.style.color = '#495057';
                //revelados[i].classList.add('oculto');
                }
            }
            
            function descriptografar() {

                // Preenchendo o textarea oculto com o valor do textarea de entrada
                //ocultoTextarea.value = entradaTextarea.value;
    
                const textoCriptografado = document.getElementById('saida').value;
                const textoDescriptografado = descriptografarTexto(textoCriptografado);
                document.getElementById('saida').value = textoDescriptografado;
                //document.getElementById('entrada').value = textoCriptografado;
    
                    // Verificando se o textarea de entrada está vazio
                    if (entradaTextarea.value.trim() === '') {
                        // Se estiver vazio, mantenha a classe "revelado" revelada
                        ocultoDiv.classList.add('oculto');
                        const revelados = document.querySelectorAll('.revelado');
                        for (let i = 0; i < revelados.length; i++) {
                            revelados[i].classList.remove('oculto');
                            //revelados[i].classList.toggle('oculto');
                            //toggle é melhor que adicionar e remover
                        }
                        console.log("if");
    
                    // Selecionando o textarea pelo ID
                    //const distextarea = document.getElementById('saida');
    
                    // Desativando o input de texto no textarea dá para colocar diretamente nele
                    //distextarea.disabled = true;
                    // distextarea.style.color = '#495057';
                    //revelados[i].classList.add('oculto');
    
                    } else {
                        // Se não estiver vazio, oculte os elementos revelados
                        ocultoDiv.classList.remove('oculto');
                        const revelados = document.querySelectorAll('.revelado');
                        for (let i = 0; i < revelados.length; i++) {
                            revelados[i].classList.add('oculto');
                            //revelados[i].classList.toggle('oculto');
                            //toggle é melhor que adicionar e remover
                        }
                        console.log("else");
    
                                        // Selecionando o textarea pelo ID
                    //const distextarea = document.getElementById('saida');
    
                    // Desativando o input de texto no textarea dá para colocar diretamente nele
                    // distextarea.disabled = true;
                    // distextarea.style.color = '#495057';
                    //revelados[i].classList.add('oculto');
                    }
                }


            // Adicionando um evento de escuta para o evento de entrada (input) no textarea
            entradaTextarea.addEventListener('input', function() {
                // Verificando se o textarea está vazio
                if (entradaTextarea.value.trim() === '') {
                    ocultoTextarea.value = entradaTextarea.value;
                    // Se estiver vazio, adicionar a classe "oculto" ao elemento com o ID "oculto"
                    document.getElementById('revelado').classList.remove('oculto');
                    document.getElementById('revelado1').classList.remove('oculto');
                    document.getElementById('oculto').classList.remove('revelado');
                    ocultoDiv.classList.add('oculto');
                    console.log("if");
                
                    // Selecionando o textarea pelo ID
                //const distextarea = document.getElementById('saida');

                // Desativando o input de texto no textarea dá para colocar diretamente nele
                // distextarea.disabled = true;
                // distextarea.style.color = '#495057';
                //revelados[i].classList.add('oculto');
                } /*else {
                    // Se não estiver vazio, remover a classe "oculto" do elemento com o ID "oculto"
                    document.getElementById('oculto').classList.remove('revelado');
                    document.classList.add('oculto1');
                    console.log("else");
                }*/
            });


            //function criptografar() {
                // const textoOriginal = document.getElementById('entrada').value.toLowerCase();
                // const textoLimpo = removerAcentos(textoOriginal);
                // const textoCriptografado = criptografarTexto(textoLimpo);
                // document.getElementById('saida').value = textoCriptografado;
            //}
            
            // function descriptografar() {
            //     const textoCriptografado = document.getElementById('saida').value;
            //     const textoDescriptografado = descriptografarTexto(textoCriptografado);
            //     document.getElementById('entrada').value = textoDescriptografado;
            // }
            
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

function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

/*
<textarea id="texto" oninput="ajustarTamanho(this)"></textarea>
<div id="divTexto"></div>

function ajustarTamanho(elemento) {
    const texto = elemento.value;
    const divTexto = document.getElementById("divTexto");
    divTexto.textContent = texto;
}

#divTexto {
    border: 1px solid black;
    padding: 10px;
    margin-top: 10px;
}
*/
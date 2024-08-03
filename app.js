var botonCopiar = document.getElementById("botonCopiar");
const outputText = document.getElementById("outputText"); 

function hiddeButton(){
    var botonCopiar = document.getElementById("botonCopiar");
    botonCopiar.classList.add('oculto');
    outputText.classList.add('oculto');
    
}

function encriptar(){
    // Obtener el texto del textarea de entrada
    const inputText = document.getElementById('inputText').value;
    
    // Reemplazar caracteres según las reglas dadas
    let encryptedText = inputText
    .replace(/a/g, '1')  // Paso 1: Reemplaza 'a' por un marcador temporal '1'
    .replace(/e/g, '2')  // Paso 2: Reemplaza 'e' por un marcador temporal '2'
    .replace(/i/g, '3')  // Paso 3: Reemplaza 'i' por un marcador temporal '3'
    .replace(/o/g, '4')  // Paso 4: Reemplaza 'o' por un marcador temporal '4'
    .replace(/u/g, '5')  // Paso 5: Reemplaza 'u' por un marcador temporal '5'
    .replace(/1/g, 'ai') // Paso 6: Reemplaza el marcador '1' por 'ai'
    .replace(/2/g, 'enter') // Paso 7: Reemplaza el marcador '2' por 'enter'
    .replace(/3/g, 'imes') // Paso 8: Reemplaza el marcador '3' por 'imes'
    .replace(/4/g, 'ober') // Paso 9: Reemplaza el marcador '4' por 'ober'
    .replace(/5/g, 'ufat'); // Paso 10: Reemplaza el marcador '5' por 'ufat'

    // Mostrar el texto encriptado en el textarea de salida
    const outputText = document.getElementById('outputText');
            outputText.classList.remove('oculto');
            outputText.value = encryptedText;
    

    console.log("Texto encriptado:", encryptedText); // Depuración

    // Hacer visible el botón de copiar
    botonCopiar.classList.remove('oculto');;

    // Ocultar el elemento imagen, el parrafo y el subtitulo
    var muneco = document.getElementById("muneco");
    muneco.classList.add('oculto');
    var esconder = document.getElementById("esconder");
    esconder.classList.add('oculto');
    var subtitulo = document.getElementById("subtitulo");
    subtitulo.classList.add('oculto');
    
}
function desencriptar(){
 // Obtener el texto del textarea de entrada
 const inputText = document.getElementById('inputText').value;
    
 // Reemplazar caracteres según las reglas dadas
 let encryptedText = inputText
 .replace(/ai/g, '1')  // Paso 1: Reemplaza 'a' por un marcador temporal '1'
 .replace(/enter/g, '2')  // Paso 2: Reemplaza 'e' por un marcador temporal '2'
 .replace(/imes/g, '3')  // Paso 3: Reemplaza 'i' por un marcador temporal '3'
 .replace(/ober/g, '4')  // Paso 4: Reemplaza 'o' por un marcador temporal '4'
 .replace(/ufat/g, '5')  // Paso 5: Reemplaza 'u' por un marcador temporal '5'
 .replace(/1/g, 'a') // Paso 6: Reemplaza el marcador '1' por 'ai'
 .replace(/2/g, 'e') // Paso 7: Reemplaza el marcador '2' por 'enter'
 .replace(/3/g, 'i') // Paso 8: Reemplaza el marcador '3' por 'imes'
 .replace(/4/g, 'o') // Paso 9: Reemplaza el marcador '4' por 'ober'
 .replace(/5/g, 'u'); // Paso 10: Reemplaza el marcador '5' por 'ufat'

 // Mostrar el texto encriptado en el textarea de salida
 const outputText = document.getElementById('outputText');
         outputText.classList.remove('oculto');
         outputText.value = encryptedText;
 

 console.log("Texto encriptado:", encryptedText); // Depuración

 // Hacer visible el botón de copiar
 botonCopiar.classList.remove('oculto');;

 // Ocultar el elemento imagen, el parrafo y el subtitulo
 var muneco = document.getElementById("muneco");
 muneco.classList.add('oculto');
 var esconder = document.getElementById("esconder");
 esconder.classList.add('oculto');
 var subtitulo = document.getElementById("subtitulo");
 subtitulo.classList.add('oculto');
}
function copiarTexto(){
    outputText.select();
    document.execCommand('copy');

}

hiddeButton();
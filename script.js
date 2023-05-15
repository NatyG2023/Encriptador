const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.getElementById("copy-btn");



//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado =encriptar(textArea.value)
    mensaje.value = textoEncriptado
    mensaje.style.backgroundImage = "none"
}

function encriptar(stringEncriptada){
let matrizCodigo = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
stringEncriptada = stringEncriptada.toLowerCase()

for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
}

return stringEncriptada
}


function btnDesencriptar(){
    const textoEncriptado =desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    console.log(textoEncriptado)
   
}
function desencriptar(stringDesencriptada){
let matrizCodigo = [["enter", "e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
stringDesencriptada = stringDesencriptada.toLowerCase()

for(let i = 0; i < matrizCodigo.length; i++){
    if(stringDesencriptada.includes(matrizCodigo[i][0])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
}
return stringDesencriptada

}
function copiar(){
    const contenido = document.getElementById("textoDesencriptado");
    const textoCopiado = contenido.textContent;
    navigator.clipboard.writeText(mensaje.value);
    alert("texto copiado es:"+ mensaje.value);

}

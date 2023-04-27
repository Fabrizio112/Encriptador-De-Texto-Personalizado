import {agregarTextoCodificadoDecodificado} from "./visual.js";

const $BOTON_DESENCRIPTAR=document.querySelector("#side-bar__center-boton-desencriptar");
export function botonDesencriptar(){
    $BOTON_DESENCRIPTAR.addEventListener("click",()=>{
        let valorDelTextArea=document.querySelector("#side-bar__center-textarea").value.toLowerCase()
        let textoDecodificado=decodificarElCodigo(valorDelTextArea)
        agregarTextoCodificadoDecodificado(textoDecodificado)
        console.log(textoDecodificado)
    })
}

function decodificarElCodigo(a){
   let mensajeDecodificado=a.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u")
    return mensajeDecodificado;
}
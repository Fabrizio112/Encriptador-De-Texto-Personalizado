export function agregarTextoCodificadoDecodificado(a){
    const $IMAGEN=document.querySelector("#imagen-mensaje")
    const $TITULO=document.querySelector("#titulo-mensaje")
    const $TEXTO_MENSAJE=document.querySelector("#texto-mensaje")
    $IMAGEN.classList.add("oculto")
    $TITULO.classList.add("oculto")
    $TEXTO_MENSAJE.classList.add("oculto")
    let $MENSAJE_CODIFICADO_DECODIFICADO=document.querySelector("#mensaje")
    let $BOTON_COPIAR=document.querySelector("#boton-copiar")
    $BOTON_COPIAR.classList.remove("oculto")
    $MENSAJE_CODIFICADO_DECODIFICADO.classList.remove("oculto")
    $MENSAJE_CODIFICADO_DECODIFICADO.textContent=a;
    $MENSAJE_CODIFICADO_DECODIFICADO.classList.add("codigoCD")
}
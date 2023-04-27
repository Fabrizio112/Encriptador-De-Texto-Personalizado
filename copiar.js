const $BOTON_COPIAR =document.querySelector("#boton-copiar")

export  function botonCopiar(){
    $BOTON_COPIAR.addEventListener("click",()=>{
        let textoCopiado=document.querySelector("#mensaje").textContent
        navigator.clipboard.writeText(textoCopiado)
        const $MENSAJE_ALERTA =document.querySelector("#mensaje-alerta")
        $MENSAJE_ALERTA.classList.remove("oculto")
        setTimeout(() => {
            $MENSAJE_ALERTA.classList.add("oculto")
        }, 1500);
    })
}
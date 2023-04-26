const $BOTON_ENCRIPTAR=document.querySelector("#side-bar__center-boton-encriptar");

export function botonEncriptar(){
$BOTON_ENCRIPTAR.addEventListener("click", () =>{
    let valorDelTextArea=document.querySelector("#side-bar__center-textarea").value.toLowerCase()
    let textoCodificado=codificarElCodigo(valorDelTextArea)
    console.log(textoCodificado)
})
}

function codificarElCodigo(a){
    let nuevoArray=a.split("");
    nuevoArray.forEach((elemento,indice) => {
        if(elemento==="a"){
            return nuevoArray[indice]="ai"
        }else if(elemento==="e"){
            return nuevoArray[indice]="enter"
        }else if(elemento==="i"){
            return nuevoArray[indice]="imes"
        }else if(elemento==="o"){
            return nuevoArray[indice]="ober"
        }else if(elemento==="u"){
            return nuevoArray[indice]="ufat"
        }
    });
    let arrayYaCodificado=nuevoArray.join("");
    return arrayYaCodificado;
}



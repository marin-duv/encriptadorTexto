// Solucion: boton copiar, si pega a textarea en el navegador y en el celular 

document.addEventListener('DOMContentLoaded', function () {
    
    const texto = document.querySelector(".area1mensaje");
    const mensaje = document.querySelector(".area2mensaje");
    const info = document.querySelector(".area2info");
    const copiarbtn = document.querySelector(".botoncopiar");

    texto.value = "";
    mensaje.value = "";

    // Función encriptadora
    function encriptar(textoEncriptado) {
        let llavesEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        textoEncriptado = textoEncriptado.toLowerCase();
        for (let i = 0; i < llavesEncriptacion.length; i++) {
            if (textoEncriptado.includes(llavesEncriptacion[i][0])) {
                textoEncriptado = textoEncriptado.replaceAll(llavesEncriptacion[i][0], llavesEncriptacion[i][1]);
            }
        }
        return textoEncriptado;
    }

    // Función del botón encriptar
    window.encriptarBoton = function () {
        const mensajeEncriptado = encriptar(texto.value);
        mensaje.value = mensajeEncriptado;
        mensaje.setAttribute("rows", "8");
        texto.value = "";
        mensaje.style.backgroundImage = "none";
        info.style.display = "none";
        copiarbtn.style.display = "flex";
        copiarbtn.focus();
        console.log("-*-*-*-Encriptar botón presionado-*-*-*-");
    }

    // Función desencriptar
    function desencriptar(textoDesencriptado) {
        let llavesDesencriptacion = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
        textoDesencriptado = textoDesencriptado.toLowerCase();
        for (let i = 0; i < llavesDesencriptacion.length; i++) {
            if (textoDesencriptado.includes(llavesDesencriptacion[i][0])) {
                textoDesencriptado = textoDesencriptado.replaceAll(llavesDesencriptacion[i][0], llavesDesencriptacion[i][1]);
            }
        }
        return textoDesencriptado;
    }

    // Función del botón desencriptar
    window.desencriptarBoton = function () {
        const mensajeDesencriptado = desencriptar(texto.value);
        mensaje.value = mensajeDesencriptado;
        mensaje.setAttribute("rows", "8");
        texto.value = "";
        mensaje.style.backgroundImage = "none";
        info.style.display = "none";
        copiarbtn.style.display = "flex";
        copiarbtn.focus();
        console.log("-*-*-*-Desencriptar botón presionado-*-*-*-");
    }
    // Función copiar
    window.copiar = async function () {
        try {
            const textToCopy = mensaje.value;

            // Copiar al portapapeles
            if (navigator.clipboard) {
                await navigator.clipboard.writeText(textToCopy);
            } else {
                // Fallback para navegadores más antiguos
                const textArea = document.createElement("textarea");
                textArea.value = textToCopy;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                document.body.removeChild(textArea);
            }

            // Pegar en el textarea de class="area1mensaje"
            texto.value = textToCopy;
            mensaje.value = "";
            info.style.display = "block";
            copiarbtn.style.display = "none";
            mensaje.style.backgroundImage = "";
            console.log("-*-*-*-Texto copiado y pegado-*-*-*-");
        } catch (
            e) {
            console.log(e);
        }
    }

    // Asegurarse de que los botones funcionen en dispositivos táctiles
    copiarbtn.addEventListener('touchstart', copiar);
});

const inputTexto = document.getElementById("inputTexto");
const bEncriptar = document.getElementById("bEncriptar");
const bDesencriptar = document.getElementById("bDesencriptar");
const copiar = document.getElementById("copiar");
const textoFinal = document.getElementById("textoFinal");
const muneco = document.getElementById("muneco");
const textoInfo = document.getElementById("textoInfo");
const presentacion__contenido__textarea = document.getElementById("presentacion__contenido__textarea");

let remplazo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]

bEncriptar.addEventListener("click", () => {
    const textoIngresado = inputTexto.value.toLowerCase();
    function textoEncriptado(newTex) {
        for (let i = 0; i < remplazo.length; i++) {
            if (newTex.includes(remplazo[i][0])) {
                newTex = newTex.replace(remplazo[i][0], remplazo[i][1]);
            }
        };
        return newTex;
    };
    textoEncriptado = textoEncriptado(textoIngresado);
    textoFinal.innerText = textoEncriptado;
    muneco.style.display = "none";
    inputTexto.value = "";
    textoInfo.style.display = "none";
    copiar.style.display = "block";
    presentacion__contenido__textarea.classList.add("ajuste");
    textoFinal.classList.add("ajuste");
})

bDesencriptar.addEventListener("click", () => {
    const textoIngresado = inputTexto.value.toLowerCase();
    function textoDesencriptado(newTex) {
        for (let i = 0; i < remplazo.length; i++) {
            if (newTex.includes(remplazo[i][1])) {
                newTex = newTex.replaceAll(remplazo[i][1], remplazo[i][0]
                );
            }
        }
        return newTex;
    };
    textoDesencriptado = textoDesencriptado(textoIngresado);
    textoFinal.innerText = textoDesencriptado;

})

copiar.addEventListener("click", () => {
    // Obtenga el texto del texto ingresado
    const textoIngresado = textoFinal;
    // navigator.clipboard.writeText(textoIngresado.value);
    textoIngresado.select();
    document.execCommand("copy");
})



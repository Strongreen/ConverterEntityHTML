function converter() {
    var Payload = document.getElementById("payload").value;
    var resultado = "";
    for (var i = 0; i < Payload.length; i++) {
        resultado += "&#" + Payload.charCodeAt(i);
    }
    document.getElementById("resultado").textContent = resultado;
}
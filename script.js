function encriptar() {
  var textoEntrada = document.getElementById("textoEntrada").value;
  var textoSaida = "";

  for (var i = 0; i < textoEntrada.length; i++) {
    var charCode = textoEntrada.charCodeAt(i);
    textoSaida += String.fromCharCode(charCode + 1);
  }

  document.getElementById("textoSaida").value = textoSaida;
}

function desencriptar() {
  var textoSaida = document.getElementById("textoSaida").value;
  var textoEntrada = "";

  for (var i = 0; i < textoSaida.length; i++) {
    var charCode = textoSaida.charCodeAt(i);
    textoEntrada += String.fromCharCode(charCode - 1);
  }

  document.getElementById("textoEntrada").value = textoEntrada;
}

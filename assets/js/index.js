var modal = document.getElementById ("abrirmodal")

var close = document.getElementById ("cerrar")

var modal = () =>  {
    abrirmodal.style.display = "block"
}

var cerrarmodal = () =>  {
    abrirmodal.style.display = "none"
}

abrirmodal.onclick = modal
cerrar.onclick = cerrarmodal

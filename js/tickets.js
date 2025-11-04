function abrirFormulario(tipoAbono) {
    "use strict";
    var formModal = document.getElementById("form-modal");
    var selectAbono = document.getElementById("abono");

    formModal.style.display = "block";
    
    for (var i = 0; i < selectAbono.options.length; i++) {
        if (selectAbono.options[i].value === tipoAbono) {
            selectAbono.selectedIndex = i;
            break; 
        }
    }

    costeTotal();
}

function cerrarFormulario() {
    "use strict";
    var formModal = document.getElementById("form-modal");
    if (formModal) {
        formModal.style.display = "none";
        document.getElementById("purchase-form").reset();
        costeTotal(); 
    }
}


function costeTotal() {
    "use strict";
    
    var selectAbono = document.getElementById("abono");
    var inputNumero = document.getElementById("numero");
    var spanCoste = document.getElementById("coste");
    
    if (!selectAbono || !inputNumero || !spanCoste) {
        return; 
    }

    var precio = parseInt(selectAbono.options[selectAbono.selectedIndex].getAttribute("data-price"), 10);
    var numero = parseInt(inputNumero.value, 10);
    var total = precio * numero;
    
    spanCoste.innerHTML = total + "€";
}

function comprar(e) {
    "use strict";
    
    e.preventDefault(); 

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var abono = document.getElementById("abono");
    var nombreAbono = abono.options[abono.selectedIndex].text; 
    var numero = document.getElementById("numero").value;
    var coste = document.getElementById("coste").innerHTML;
    
    if (numero < 1 || numero > 6) {
        alert("El número de entradas debe estar entre 1 y 6.");
        return false;
    }
    
    document.getElementById("form-modal").style.display = "none";
    
    document.getElementById("n").innerHTML = nombre;
    document.getElementById("c").innerHTML = correo;
    document.getElementById("a").innerHTML = nombreAbono;
    document.getElementById("nu").innerHTML = numero;
    document.getElementById("ct").innerHTML = coste;
    
    document.getElementById("compra-modal").style.display = "block";
    
    return false; 
}

function cerrarVentanaCompra() {
    "use strict";
    
    document.getElementById("compra-modal").style.display = "none";
    
    var form = document.getElementById("purchase-form");
    if (form) {
        form.reset();
        costeTotal(); 
    }
}

document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    var form = document.getElementById("purchase-form");
    if (form) {
        form.addEventListener('submit', comprar);
    }
});
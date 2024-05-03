

(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

})(jQuery);

let btn_secudary = document.getElementById('Secundaria');
let btn_primary = document.getElementById('Primaria');

btn_primary.addEventListener("click", function () {
    document.getElementById('art_primaria').style.display = 'grid';
    document.getElementById('art_secundaria').style.display = 'none';

});

btn_secudary.addEventListener("click", function () {
    document.getElementById('art_primaria').style.display = 'none';
    document.getElementById('art_secundaria').style.display = 'grid';

});

// Mostrar y ocultar formular

const contra = "CGS_2024";
// Función para capturar la contraseña

let cont = 0;
document.getElementById('mostrarF').addEventListener('click', function () {
    if (cont == 0) {
        while (contrasena !== contra) {
            var contrasena = prompt("Ingrese la contraseña");

            // Validar que se haya ingresado la contraseña
            if (contrasena !== null && contrasena.trim() !== "" && contrasena == contra) {
                document.getElementById('formulario').style.display = 'block';
            } else {
                alert('Contraseña ingresada no es valida ☹️')
            }
        }
        document.getElementById('txt_').innerHTML = 'Ocultar';
        document.getElementById('formulario').style.display = 'block';
        cont++;
    } else {
        document.getElementById('formulario').style.display = 'none';
        document.getElementById('txt_').innerHTML = 'Mostrar';

        cont--;
    }
});



function crearCard() {
    // Obtener los valores del formulario
    const titulo = document.getElementById('titulo').value;
    const imagenURL = document.getElementById('imagen').value;
    const pdfURL = document.getElementById('pdf').value;
    const autor = document.getElementById('autor').value;
    const area = document.getElementById('area').value;
    const fecha = document.getElementById('fecha').value;

    // Crear la tarjeta (card) HTML
    const card = document.createElement('div');
    card.classList.add('card');

    const imagen = document.createElement('img');
    imagen.src = imagenURL;
    imagen.alt = titulo;

    const tituloElemento = document.createElement('h2');
    tituloElemento.textContent = titulo;

    const areaElemento = document.createElement('p');
    areaElemento.textContent = `Asignatura: ${area}`;

    const fechaElemento = document.createElement('p');
    fechaElemento.textContent = `Fecha de socialización: ${fecha}`;

    const autorElemento = document.createElement('p');
    autorElemento.textContent = `Docente: ${autor}`;

    const enlacePdf = document.createElement('a');
    enlacePdf.href = pdfURL;
    enlacePdf.textContent = 'Descargar PDF';
    enlacePdf.setAttribute('target', '_blank');

    // Agregar elementos a la tarjeta
    card.appendChild(imagen);
    card.appendChild(tituloElemento);
    card.appendChild(areaElemento);
    card.appendChild(autorElemento);
    card.appendChild(fechaElemento);
    card.appendChild(enlacePdf);

    // Agregar la tarjeta al contenedor
    const contenedor = document.getElementById('contenedorCards');
    contenedor.appendChild(card);

    // Limpiar el formulario después de crear la tarjeta
    document.getElementById('formularioCard').reset();
}

function eliminarUltimaTarjeta() {
    const contenedor = document.getElementById('contenedorCards');
    const tarjetas = contenedor.getElementsByClassName('card');
    if (tarjetas.length > 0) {
        tarjetas[tarjetas.length - 1].remove();
    }
}

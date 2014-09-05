/*funcion para que solo se ingresen numeros en el input 'idUsuario'*/
function justNumbers(e)
{
var keynum = window.event ? window.event.keyCode : e.which;
if (keynum == 8)
return true;
 
return /\d/.test(String.fromCharCode(keynum));
}

/*funcion para cambiar el atributo action del formulario
dependiendo de que 'radio button' (forma de ingresar)
haya elegido el usuario*/
jQuery(document).ready(function($) {
	console.log("el documento cargó! jQuery Rules!");
    var form = $('form[name="form1"]'),
        radio = $('input[name="opciones"]'),
        choice = '';

    radio.change(function(e) {
        choice = this.value;

        if (choice === 'usuario') {
            form.attr('action', './cuentas/usuario/perfil.html');
            console.log("me estoy yendo al perfil del usuario");
        } else if (choice === 'empresa') {
            form.attr('action', './cuentas/empresa/perfil.html');
            console.log("me estoy yendo al perfil de la empresa");
        } else if (choice === 'admin'){
        	form.attr('action','./cuentas/admin/perfil.html');
        	console.log("me estoy yendo al perfil del admin");
        } 
    });
});


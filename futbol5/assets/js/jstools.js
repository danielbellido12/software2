function justNumbers(e)
{
var keynum = window.event ? window.event.keyCode : e.which;
if (keynum == 8)
return true;
 
return /\d/.test(String.fromCharCode(keynum));
}
var listaEstandar = [];
document.getElementById('usuarioEstandar').innerHTML = listaEstandar;
var listaSolidaria = [];

function agregarEstandar(e)
{
	
	listaEstandar.push(document.getElementById('usuarioEstandar'));
	document.getElementById('usuarioEstandar').innerHTML = listaEstandar;

}
/*funciones para la parte de las reservas*/
$(function () {
                $('#datetimepicker1').datetimepicker();
            });
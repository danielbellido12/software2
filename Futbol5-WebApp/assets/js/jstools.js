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
	$('.form_date').datetimepicker({
        language:  'es',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0,
		startDate: '2014-09-04'
    });
	$('.form_time').datetimepicker({
        language:  'es',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 1,
		minView: 0,
		maxView: 1,
		forceParse: 0,
		minuteStep: 60
    });            
});
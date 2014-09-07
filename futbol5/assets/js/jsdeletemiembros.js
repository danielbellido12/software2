function justNumbers(e)
{
var keynum = window.event ? window.event.keyCode : e.which;
if (keynum == 8)
return true;
 
return /\d/.test(String.fromCharCode(keynum));
}

$('#btnDelete').on('click', function(e){
	e.preventDefault();
	var href = $(this).attr("href");
    
    if(confirm("Estás seguro que quieres eliminar a este usuario?"))
    {
    	document.location.href = "resultadodelete.html";
	}
	else
	{
		document.location.href = "#";
	}
});

       
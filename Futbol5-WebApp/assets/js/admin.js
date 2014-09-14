$(document).ready(function() {
    console.log("se cargo!");

    // 
    $('#btnAdd').on('click', function() {
        bootbox
            .dialog({
                title: 'Registro de datos',
                message: $('#addForm'),
                show: false // We will show it manually later
            })
            .on('shown.bs.modal', function() {
                $('#addForm')
                    .show()                                 // Show the login form
                     // Reset form
            })
            .on('hide.bs.modal', function(e) {
                // Bootbox will remove the modal (including the body which contains the login form)
                // after hiding the modal
                // Therefor, we need to backup the form
                $('#addForm').hide().appendTo('body');
            })
            .modal('show');
    });


    $('.btnEdit').on('click', function() {
        bootbox
            .dialog({
                title: 'Editar datos',
                message: $('#editForm'),
                show: false // We will show it manually later
            })
            .on('shown.bs.modal', function() {
                $('#editForm')
                    .show()                                 // Show the login form
                     // Reset form
            })
            .on('hide.bs.modal', function(e) {
                // Bootbox will remove the modal (including the body which contains the login form)
                // after hiding the modal
                // Therefor, we need to backup the form
                $('#editForm').hide().appendTo('body');
            })
            .modal('show');
    });

    $('.btnDelete').on('click',function(){
        bootbox.confirm("Estas seguro?",function(result){
            console.log("confirmado?" + result);
        });
    })    
});

function justNumbers(e)
        {
        var keynum = window.event ? window.event.keyCode : e.which;
        if (keynum == 8)
        return true;
         
        return /\d/.test(String.fromCharCode(keynum));
        }
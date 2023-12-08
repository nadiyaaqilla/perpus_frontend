$('#formSupplier').submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    $.ajax({
        type: 'POST',
        url: host_be+"input_supplier.php",
        data: formData,
        cache: false,
        contentType: false, 
        processData: false, 
        dataType: 'json',
        success: (result) => {
            window.location.href="http://localhost/perpus_frontend/admin/?page=data_kategori"
        },
    });
})
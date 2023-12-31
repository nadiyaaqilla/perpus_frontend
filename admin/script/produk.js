$('#insert-produk').submit(function(e){
    e.preventDefault();
    var formData = new FormData(this);
    console.log(formData);
    $.ajax({
        type: 'POST',
        url: host_be + "insert_produk.php",
        data: formData,
        cache: false,
        contentType: false, 
        processData: false, 
        dataType: 'json',
        success: (result) => {
            alert(result.msg);
            window.location.href = "?page=dashboard";
        },
    });
});

$.ajax({
    type: 'GET',
    url: host_be + "read_kategori.php",
    cache: false,
    contentType: false, 
    processData: false, 
    dataType: 'json',
    success: (result) => {
        // Clear existing options in the dropdown
        $('#kode_kategori').empty();

        // Add an empty/default option
        $('#kode_kategori').append('<option value="">Pilih Kategori</option>');

        // Loop through the data and append options to the dropdown
        result.data.forEach((item) => {
            $('#kode_kategori').append(`
                <option value="${item.kode}">${item.nama}</option>
            `);
        });
    },
});

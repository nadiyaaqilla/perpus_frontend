$(document).ready(function () {
  var urlParams = new URLSearchParams(window.location.search);
  var isbn = urlParams.get("isbn");
  var selectedCategoryCode;

  // Pemanggilan AJAX untuk mengambil data produk
  $.ajax({
    type: "GET",
    url: host_be + "produk_dwl.php?isbn=" + isbn,
    cache: false,
    contentType: false,
    processData: false,
    dataType: "json",
    success: function (response) {
      var item = response.body.data[0];

      $("#judul_bk").val(item.judul_bk);
      $("#isbn").val(item.isbn_bk);
      $("#penulis_bk").val(item.penulis_bk);
      $("#kode_kategori").val(item.kode);
      $("#sinop_bk").val(item.sinop_bk);
      selectedCategoryCode = item.kode;

      // Pemanggilan AJAX untuk mengambil data kategori
      $.ajax({
        type: "GET",
        url: host_be + "read_kategori.php",
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (result) {
          // Loop through the data and append options to the dropdown
          result.data.forEach((item) => {
            $("#kode_kategori").append(`
              <option value="${item.kode}" ${item.nama === selectedCategoryCode ? 'selected' : ''}>
                ${item.nama}
              </option>
            `);
          });
        },
      });
      
      
    },
    
  });
  
  $("#edit-produk").submit(function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    // var isbnbk = $("#isbn").val();
    $.ajax({
      type: "POST",
      url: host_be + "edit_produk.php?isbn_bk=" + isbn,
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      dataType: "json",
      success: function (response) {
        alert(response.msg);
        window.location.href = "?page=dashboard";
      },
      error: function (error) {
        console.error("Error editing product:", error);
      },
    });
  });

});

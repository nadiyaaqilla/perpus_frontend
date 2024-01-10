


$(document).ready(function () {
  $("#edit_kategori").submit(function (e) {
    e.preventDefault();
    var formData = new FormData(this);
    var kode = $('#kode').val();
    $.ajax({
      type: "POST",
      url: host_be + "edit_kategori.php?kode="+ kode,
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      dataType: "json",
      success: (result) => {
        alert(result.msg);
        window.location.href="?page=kategori";
      },
    });
  });

 


});

var urlParams = new URLSearchParams(window.location.search);
var kode = urlParams.get('kode');
$.ajax({
  type: 'GET',
  url: host_be + "read_kategori_kode.php?kode=" + kode,
  data: { kode: kode },
  cache: false,
  contentType: false,
  processData: false,
  dataType: 'json',
  success: function (result){
      // Clear existing options in the dropdown
      $('#edit_kategori').empty();

      // Add an empty/default option
      $('#edit-kategori').append();
        
              $('#edit_kategori').append(`
              <input type="text" id="kode" name="kode" readonly class="form-control" style="border: 2px;" value="${result.data.kode}">
              <input type="text" name="nama" class="form-control" style="border: 2px;" value="${result.data.nama}">
              <button type="submit" class="btn text-white mt-3" style="background-color: #2A3F54; float:right;"><b style="color: #1ABB9C;">Tambahkan</b></button>
              `);
      
      
  },
});

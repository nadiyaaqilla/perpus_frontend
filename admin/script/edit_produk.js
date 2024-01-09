

$("#edit-produk").submit(function (e) {
  e.preventDefault();
  var formData = new FormData(this);
  console.log(formData);
  var isbn = $("#isbn").val();
  $.ajax({
    type: "POST",
    url: host_be + "edit_produk.php?isbn_bk=" + isbn,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    dataType: "json",
    success: (result) => {
      alert(result.msg);
      window.location.href = "?page=dashboard";
    },
  });
});

var urlParams = new URLSearchParams(window.location.search);
var isbn = urlParams.get("isbn");
console.log(isbn);
$.ajax({
  type: "GET",
  url: host_be + "produk_dwl.php?isbn=" + isbn,
  data: { isbn: isbn },
  cache: false,
  contentType: false,
  processData: false,
  dataType: "json",
  success: function (result) {
    $("#edit-produk").empty();
    
    // Add an empty/default option
    result.body.data.forEach((book) => {
    $("#edit-produk").append(`
                                <div class="row">                              
                                <div class="col-25">
                                  <label for="">Cover</label>
                                </div>
                                <div class="col-75">
                                  <div class="custom-file ">
                                    <input type="file" name="cover_bk" class="form-control" id="cover_bk" value='${book.cover_bk}'>
                                </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-25">
                                  <label for="">Judul</label>
                                </div>
                                <div class="col-75">
                                  <input class="form-control" type="text" name="judul_bk" id="judul_bk" value='${book.judul_bk}'>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-25">
                                  <label for="">ISBN</label>
                                </div>
                                <div class="col-75">
                                  <input class="form-control" type="text" id="isbn" name="isbn_bk" readonly value='${book.isbn_bk}'>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-25">
                                  <label for="">Penulis</label>
                                </div>
                                <div class="col-75">
                                  <input class="form-control" type="text" name="penulis_bk" id="penulis_bk" value='${book.penulis_bk}'>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-25">
                                  <label for="">Kategori</label>
                                </div>
                                <div class="col-75">
                                  <select name="kode" id="kode_kategori">
                                  
                                  </select>
                                </div>
                               
                              </div>
                              <div class="row">
                                <div class="col-25">
                                  <label for="">Sinopsis</label>
                                </div>
                                <div class="col-75">
                                  <textarea name="sinop_bk" id="sinop_bk" style="height:100px" value='${book.sinop_bk}'>${book.sinop_bk}</textarea>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-25">
                                  <label for="">File</label>
                                </div>
                                <div class="col-75 input-group">
                                  <div class="custom-file ">
                                    <input type="file" name="file_bk" class="form-control" id="file_bk" value='${book.file_bk}'>                                    
                                </div>
                                </div>
                              </div>
                              <br>
                              <div class="row float-right">
                                <button class="btn text-white mt-1" type="submit" style="background-color: #2A3F54;"><a style="color: #1ABB9C">Tambahkan</a></button>
                              </div>
      `);
    });
  },
});


$.ajax({
  type: "GET",
  url: host_be + "read_kategori.php",
  cache: false,
  contentType: false,
  processData: false,
  dataType: "json",
  success: (result) => {
    // Clear existing options in the dropdown
    $("#kode_kategori").empty();

    // Add an empty/default option
    $("#kode_kategori").append('<option value="">Pilih Kategori</option>');

    // Loop through the data and append options to the dropdown
    result.data.forEach((item) => {
      $("#kode_kategori").append(`
                <option value="${item.kode}">${item.nama}</option>
            `);
    });
  },
});

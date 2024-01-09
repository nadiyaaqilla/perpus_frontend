$(document).ready(function () {
<<<<<<< HEAD
  alert('menampilkan data');
=======
  function getTotalData() {
    $.ajax({
        url: host_be +'total_produk.php',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            // Menampilkan total data di elemen dengan id 'totalData'
            $('#total-buku').append(`<div>${response.body.total}</div>`);
            console.log(response.body.total);
        },
        error: function(error) {
            console.log('Error:', error);
        }
    });
}

// Panggil fungsi untuk mendapatkan total data saat halaman dimuat
$(document).ready(function() {
    getTotalData();
});


>>>>>>> d8813cee45ee81c588dd9208d2d0e953da6adacd

    // Menggunakan jQuery AJAX untuk mengambil data dari backend
    $.ajax({
      url: host_be+'read_produk.php',
      type: 'GET',
      dataType: 'json',
      success: function (response) {
        if (response.status === 200) {
        // Menyisipkan data ke dalam tabel HTML
                displayBookData(response.body.data);
                  function displayBookData(bookData) {                
                      var tableBody = $('#table-body');
                  
                      for (var i = 0; i < Math.min(bookData.length, 30); i++) {
                          var book = bookData[i];
                          var no = i + 1;
                          var sinopSingkat = book.sinop_bk.length > 90 ? book.sinop_bk.substring(0, 90) + "..." : book.sinop_bk;
                          var judulSingkat = book.judul_bk.length > 10 ? book.judul_bk.substring(0, 10) + "..." : book.judul_bk;
                  
                          var bookHtml = `
                          <tr justify-content-center>
                            <td>${no}</td>
                            <td><img src="${host_be}file/img/${book.cover_bk}" style="width: 50px;"></td>
                            <td>${book.isbn_bk}</td>
                            <td style="width: 50px;">${judulSingkat}</td>
                            <td>${book.kode}</td>
                            <td>${book.penulis_bk}</td>
                            <td>${sinopSingkat}</td>
                            <td><a href="${host_be}file/${book.file_bk}" target="_blank">${judulSingkat}.pdf</a></td>
                            
                            <td>
                            <a href="?page=edit_produk&&isbn=${book.isbn_bk}"><i class="bi bi-pencil-fill"></i></a>
                            <a class="delete" key="isbn=${book.isbn_bk}"><i class="bi bi-trash-fill" style="color: red;"></i></a>
                            </td>
                          </tr>
                          ${no}++;
                             `;
                  
                          tableBody.append(bookHtml);
                      }
                  }
                }
      },
      error: function (error) {
        console.log('Error: ' + error);
      },
    });
    $('body').on('click','a.delete', function(){
      var key = $(this).attr('key');
      console.log(key);
      $.ajax({
        type: "GET",
        url: host_be+"hapus-bk.php",
        data: key,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: (result) => {
          alert(result.msg);
          window.location.reload();
        },
      });
    })
  });
  

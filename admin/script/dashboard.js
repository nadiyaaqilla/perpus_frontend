$(document).ready(function () {
  function getTotalData() {
      $.ajax({
          url: host_be + 'total_produk.php',
          type: 'GET',
          dataType: 'json',
          success: function (response) {
              // Menampilkan total data di elemen dengan id 'totalData'
              $('#total-buku').append(`<div>${response.body.total}</div>`);
              console.log(response.body.total);
          },
          error: function (error) {
              console.log('Error:', error);
          }
      });
  }

  function ParsingData() {
      $.ajax({
          url: host_be + 'read_produk.php',
          type: 'GET',
          dataType: 'json',
          success: function (response) {
              if (response.status === 200) {
                  // Menyisipkan data ke dalam tabel HTML
                  displayBookData(response.body.data);
              }
          },
          error: function (error) {
              
          },
      });
  }

  function displayBookData(bookData) {
      var tableBody = $('#table-body');
      // Clear existing data
      tableBody.empty();

      for (var i = 0; i < Math.min(bookData.length); i++) {
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
          `;

          tableBody.append(bookHtml);
      }
  }

  // Panggil fungsi untuk mendapatkan total data saat halaman dimuat
  getTotalData();

  // Panggil fungsi untuk parsing data saat halaman dimuat
  ParsingData();

  $('body').on('click', 'a.delete', function (e) {
      e.preventDefault();
      var key = $(this).attr('key');
      if (confirm("Yakin ingin hapus data dengan " + key + "?")) {
          $.ajax({
              type: "GET",
              url: host_be + "hapus-bk.php",
              data: key,
              cache: false,
              contentType: false,
              processData: false,
              dataType: "json",
              success: function (result) {
                  alert(result.msg);      
                  ParsingData();          
              },
          });
      }
       // Update table after successful deletion
      ParsingData();
      location.reload();
  });
});

$(document).ready(function () {

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
                  
                      for (var i = 0; i < Math.min(bookData.length, 26); i++) {
                          var book = bookData[i];
                          var no = i + 1;
                          var sinopSingkat = book.sinop_bk.length > 90 ? book.sinop_bk.substring(0, 90) + "..." : book.sinop_bk;
                          var judulSingkat = book.judul_bk.length > 10 ? book.judul_bk.substring(0, 10) + "..." : book.judul_bk;
                  
                          var bookHtml = `
                          <tr justify-content-center>
                            <td>${no}</td>
                            <td><img src="../file/img/${book.cover_bk}" style="width: 50px;"></td>
                            <td>${book.isbn_bk}</td>
                            <td style="width: 50px;">${judulSingkat}</td>
                            <td>${book.nama_kategori}</td>
                            <td>${book.penulis_bk}</td>
                            <td>${sinopSingkat}</td>
                            <td a href="../file/${book.file_bk}">${judulSingkat}.pdf</td>
                            <td>${book.jml_dwn_bk}</td>
                            <td>
                            <a href="edit_admin.html"><i class="bi bi-pencil-fill"></i></a>
                            <a href="hapus-bk.php?isbn=${book.isbn_bk}"><i class="bi bi-trash-fill" style="color: red;"></i></a>
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
  });
  

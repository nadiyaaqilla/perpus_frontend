$(function () {
    $.ajax({
        type: 'GET',
        url: host_be+'read_produk.php',
        dataType: 'json',
        success: function (data) {
            if (data.status === 200) {
                var books = data.body.data;

                // Iterate through each book in the array
                $.each(books, function (index, book) {
                    var isbn = book.isbn_bk;
                    var judul = book.judul_bk;
                    var cover = book.cover_bk;
                    var kategori = book.kode;
                    var truncatedSinop = book.sinop_bk.length > 100 ? book.sinop_bk.substring(0, 100) + "..." : book.sinop_bk;
                    // Append HTML content for each book
                    $('#daftar-isi').append(
                        '<div class="col-md-3 konten1 d-flex justify-content-center">' +
                        '<a href="?page=produk&&isbn='+ isbn+'">'+
                        '<img src="'+host_be+'file/img/' + cover + '" alt=""></a>' +
                        '</div>' +
                        '<div class="col-md-3 konten1">' +
                        '<p><strong><a href="?page=produk&&isbn='+ isbn+'" style="color: inherit;text-decoration: none;">' + judul + '</a></strong><br>' + kategori + '<br><br><br>' + truncatedSinop + '</p>' +
                        '</div>'
                    );
                });
            } else {
                // Handle error case
                console.error("Error: " + data.msg);
            }
        },
        error: function (xhr, status, error) {
            console.error("AJAX Error: " + status + " - " + error);
        }
    });
});

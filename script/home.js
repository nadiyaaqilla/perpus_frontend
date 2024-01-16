$(document).ready(function() {
    // Mengambil data buku menggunakan AJAX
    $.ajax({
        url: host_be + 'read_produk.php',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            if (response.status === 200) {
                // Mengurutkan data buku berdasarkan ISBN secara descending
                response.body.data.sort(function(a, b) {
                    return b.isbn_bk - a.isbn_bk;
                });
                // Menampilkan data buku lima teratas
                displayBookData(response.body.data);
            } else {
                console.error('Error:', response.msg);
            }
        },
        error: function(xhr, status, error) {
            console.error('AJAX Error:', status, error);
        }
    });

    // Fungsi untuk menampilkan data buku
    function displayBookData(bookData) {
        var homeFav = $('#home-fav');

        for (var i = 0; i < Math.min(bookData.length, 5); i++) {
            var book = bookData[i];

            var bookHtml = `
                <div class="col-lg-2 konten1 d-flex justify-content-around">
                    <a href="?page=produk&&isbn=${book.isbn_bk}" class="cov-bk">
                        <img class="img-fav" src="${host_be}file/img/${book.cover_bk}" value="${book.isbn_bk}">
                    </a>
                </div>
            `;

            homeFav.append(bookHtml);
        }
    }

    // Mengambil data kategori menggunakan AJAX
    $.ajax({
        type: 'GET',
        url: host_be + 'read_kategori.php',
        dataType: 'json',
        success: function(result) {
            var homeKat = $('#home-kat');
            homeKat.empty();

            // Menambahkan tombol kategori berdasarkan data yang diterima
            result.data.forEach((item) => {
                homeKat.append(`
                    <div class="col-lg-3 konten2 d-flex justify-content-around">
                        <button type="button" class="btn btn-info btn-cat" value="${item.nama}">${item.nama}</button>
                    </div>
                `);
            });
        },
    });

    // Menangani klik pada tombol kategori (dengan event delegation)
    $(document).on('click', '.btn-cat', function() {
        var category = $(this).val();
        window.location.href = '?page=kategori&&category=' + encodeURIComponent(category);
    });

    // Menangani klik pada gambar buku (dengan event delegation)
    $(document).on('click', '.cov-bk', function() {
        var cover = $(this).find('img').attr('value');
        window.location.href = '?page=produk&&isbn=' + encodeURIComponent(cover);
    });
});

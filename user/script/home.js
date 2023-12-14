$(document).ready(function() {
    $.ajax({
        url: host_be+'read_produk.php',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            if (response.status === 200) {
                displayBookData(response.body.data);
                function displayBookData(bookData) {                
                    var homeFav = $('#home-fav');
                
                    for (var i = 0; i < Math.min(bookData.length, 5); i++) {
                        var book = bookData[i];
                
                        var bookHtml = `
                            <div class="col-lg-2 konten1 d-flex justify-content-around">
                                <a href="?page=produk&&isbn=${book.isbn_bk}" id="cov-bk">
                                <img class="img-fav" src="../assets/img/${book.cover_bk}" value="${book.isbn_bk}">
                                </a>
                            </div>
                           `;
                
                        homeFav.append(bookHtml);
                    }
                }
            } else {
                console.error('Error:', response.msg);
            }
        },
        error: function(xhr, status, error) {
            console.error('AJAX Error:', status, error);
        }
    });

    
    $.ajax({
        url: host_be+'read_produk.php',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            if (response.status === 200) {
                displayNamaKategori(response.body.data);
                function displayNamaKategori(namaKategori){
                    var homekat = $('#home-kat');
                
                    for (var i = 0; i < Math.min(namaKategori.length, 5); i++) {
                        var kat = namaKategori[i];
                
                        var katHtml = `
                        <div class="col-lg-3 konten2 d-flex justify-content-around">
                            <button type="button" class="btn btn-info btn-cat" value="${kat.nm_kategori}">${kat.nm_kategori}</button>
                        </div>
                           `;
                
                        homekat.append(katHtml);
                    }
                }
            } else {
                console.error('Error:', response.msg);
            }
        },
        error: function(xhr, status, error) {
            console.error('AJAX Error:', status, error);
        }
    });


    $('.btn-cat').click(function() {
        // Get the value of the clicked button
        var category = $(this).val();

        // Redirect to kategori.html with the selected category as a query parameter
        window.location.href = 'kategori.html?category=' + encodeURIComponent(category);
    });
    $('#cov-bk').click(function() {
        // Get the value of the clicked button
        var cover = $(this).val();

        // Redirect to kategori.html with the selected category as a query parameter
        window.location.href = 'produk.html?isbn=' + encodeURIComponent(cover);
    });
});

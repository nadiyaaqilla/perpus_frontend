$(document).ready(function() {
    // Event handler for when .konten1 is clicked
    $('.konten1').click(function() {
        // Get the value of the clicked button
        var isbn = $(this).data('isbn'); // Assuming 'isbn' is a data attribute containing the ISBN

        // Redirect to kategori.html with the selected ISBN as a query parameter
        window.location.href = '?page=kategori&&isbn=' + encodeURIComponent(isbn);
    });

    // Extract query parameters from the URL
    var urlParams = new URLSearchParams(window.location.search);
    var isbn = urlParams.get('isbn'); // Assuming 'isbn' is the parameter name

    // Check if isbn is null
    if (isbn === null) {
        console.error('Error: ISBN parameter is null.');
        console.log('URL:', window.location.href);
        // Handle the situation where ISBN is null, for example, display a message or redirect
    } else {

        // Fetch additional data using AJAX
        $.ajax({
            url: host_be+'produk_dwl.php?isbn=' +isbn, // API
            type: 'GET',
            data: { isbn: isbn }, // Pass the ISBN as a parameter to the server
            dataType: 'json',
            success: function(response) {
                if (response.status === 200) {
                    displayBookData(response.body.data);
                   
                } else {
                    console.error('Error:', response.msg);
                }
            },
            error: function(xhr, status, error) {
                console.error('AJAX Error:', status, error);
            }
        });
    }
});

function displayBookData(bookData) {
    // Build the HTML content based on the server response
    var dwlProduk = $('#dwl-produk');
    dwlProduk.empty();

    for (var i = 0; i < Math.min(bookData.length, 10); i++) {
        var book = bookData[i];
        var htmlContent = `
            <div class="row justify-content-center row-produk">
                <div class="col konten1 d-flex justify-content-center">
                    <img src="${host_be}file/img/${book.cover_bk}" alt="">
                </div>
                <div class="col konten1">
                    <p><strong>${book.judul_bk}</strong><br>by<strong> ${book.penulis_bk}</strong><br>
                    ${book.kode} <br><br><br> 
                        <strong>Sinopsis:</strong><br>${book.sinop_bk}
                    </p>
                </div>
            </div>
            <div class="row justify-content-center row-produk">
                <div class="col konten1 d-flex justify-content-center">
                </div>
                <div class="col konten1 col-download" style="margin-left: 100px;">
                    <a href="${host_be}file/${book.file_bk}" target="_blank">
                    <button type="button" class="btn btn-dark"><strong>Download</strong></button>
                    </a>
                </div>
            </div>`;

        // Append the HTML content to the #dwl-produk element
        dwlProduk.append(htmlContent);
        console.log(displayBookData);
    }
}

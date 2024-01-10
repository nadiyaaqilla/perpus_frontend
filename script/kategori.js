$(document).ready(function() {
    // // Attach click event handler to all buttons with the class 'category-btn'
    // $('.category-btn').click(function() {
    //     // Get the value of the clicked button (category)
    //     var category = $(this).val();

    //     // Redirect to home.html with the selected category as a query parameter
    //     window.location.href = 'home.html?category=' + encodeURIComponent(category);
    // });

    // Fetch and display data based on the category parameter in the URL
    var urlParams = new URLSearchParams(window.location.search);
    var category = urlParams.get('category');

    // Display the category value in the heading
    $('.subjud h1').append(': ' + category);

    // Fetch and display data based on the category (you'll need to implement this part)
    $.ajax({
        url: host_be+'read_produk.php',
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            if (response.status === 200) {
                // Filter data based on the selected category
                var filteredData = response.body.data.filter(book => book.kode === category);
                
                // Display the filtered data
                displayBookData(filteredData);
                function displayBookData(bookData) {
                    // Clear existing content
                    var isiKategori = $('#isi-kategori');
                    isiKategori.empty();
            
                    // Sort the bookData array by the 'kode' property
                    bookData.sort((a, b) => a.kode.localeCompare(b.kode));
            
                    for (var i = 0; i < Math.min(bookData.length, 10); i++) {
                        var book = bookData[i];
            
                        // Truncate sinop_bk text
                        var truncatedSinop = book.sinop_bk.length > 100 ? book.sinop_bk.substring(0, 100) + "..." : book.sinop_bk;
            
                        var bookHtml = `
                            <div class="col-md-3 konten1 d-flex justify-content-center">
                            <a href="?page=produk&&isbn=${book.isbn_bk}" id="pro-dwl" value="${book.isbn_bk}">
                            <img src="${host_be}file/img/${book.cover_bk}" style="width: 160px;" alt="">
                            </a>
                                
                            </div>
                            <div class="col-md-3 konten1">
                                <p><strong><a href="?page=produk&&isbn=${book.isbn_bk}" id="pro-dwl" value="${book.isbn_bk}"
                                 style="color: inherit;text-decoration: none;">${book.judul_bk}</a></strong><br>
                                ${book.kode} <br><br><br>
                                ${truncatedSinop}
                                </p>
                            </div>`;
            
                        isiKategori.append(bookHtml);
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

    
    // $('a#pro-dwl').click(function(event) {
    //     event.preventDefault(); // Prevent the default behavior of the anchor tag
    
    //     // Get the href attribute of the clicked anchor tag
    //     var href = $(this).attr('href');
    
    //     // Extract the ISBN from the href
    //     var isbn = getParameterByName('isbn', href);
    
    //     // Redirect to produk.html with the selected ISBN as a query parameter
    //     window.location.href = 'produk.html?isbn=' + encodeURIComponent(isbn);
    // });
     
});
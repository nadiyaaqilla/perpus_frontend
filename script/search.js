$(document).ready(function () {
    function updateUrl(searchTerm) {
        var newUrl = window.location.pathname + '?search=' + encodeURIComponent(searchTerm);
        window.history.pushState({ path: newUrl }, '', newUrl);
    }

    // Attach an event handler to the form with ID "searchForm"
    $('#searchForm').submit(function (event) {
        event.preventDefault();
        var newSearchTerm = $('#searchInput').val();

        if (newSearchTerm || newSearchTerm.trim() === "") {
            // Update the URL with the new search term
            updateUrl(newSearchTerm);

            // Perform the AJAX request
            $.ajax({
                type: 'GET',
                url: host_be+'cari.php',
                data: { search: newSearchTerm },
                dataType: 'json',
                success: function (response) {
                    console.log('Success: ', response);

                    if (response && response.status === 200 && response.body && response.body.data) {
                        console.log('Data: ', response.body.data);

                        // Assuming response.body.data contains the array of search results
                        $('#hasil-cari').empty(); // Clear existing content

                        // Loop through the data and append to the container
                        for (var i = 0; i < response.body.data.length; i++) {
                            var item = response.body.data[i];
                            var newItem = $('<div class="col-lg-4 konten1 d-flex justify-content-center">' +
                                '<img src="'+host_be+'file/img/' + item.cover_bk + '">' +
                                '</div>' +
                                '<div class="col-lg-8 konten1">' +
                                '<p><strong><a href="?page=produk&&isbn='+item.isbn_bk+'" style="color: inherit;text-decoration: none;">' + item.judul_bk + '</a></strong><br>' + 
                                item.kode + '<br><br><br>' +
                                item.sinop_bk +
                                '</p>' +
                                '</div>');

                            $('#hasil-cari').append(newItem);
                        }
                    } else {
                        console.error('Invalid response format or status code.');
                    }
                },
                error: function (error) {
                    console.error('Error:', error);
                }
            });
        } else {
            // Handle the case when the search term is empty
            // For example, you can load all data here
            console.log('Empty search term. Loading all data...');
            // Make an AJAX request or load all data using a different method
        }
    });
});

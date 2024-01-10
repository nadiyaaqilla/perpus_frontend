$(document).ready(function () {
    // Handle form submission
    Parsingdata();
    function Parsingdata() {
      $.ajax({
        type: "GET",
        url: host_be+"read_kategori.php", // Create a new PHP file to fetch data
        dataType: "json",
        success: function (response) {
          if (response.status === "success") {
            // Clear existing table data
            $("#data_kat").empty();
            // Iterate through the received data and append rows to the table
            $.each(response.data, function (index, item) {
              var row = $(
                "<tr><td>" +
                  (index + 1) +
                  "</td><td>" +
                  item.nama +
                  '</td><td> <a class="edit" href="?page=editkategori&&kode='+ item.kode +'"><i class="bi bi-pencil-fill"></i></a>'+
                  '<a class="delete" key="kode='+ item.kode +'"><i class="bi bi-trash-fill" id="btnDel" style="color: red;"></i></a></td></tr>'
              );
              $("#data_kat").append(row);
            });
          } else {
            console.error("Error fetching data: " + response.message);
          }
        },
        error: function (xhr, status, error) {
          console.error("AJAX Error: " + status + " - " + error);
        },
      });
    }
  
    $('body').on('click','a.delete', function(){
      var key = $(this).attr('key');
      if (confirm("Yakin ingin hapus data dengan " + key  + "?")) {
      $.ajax({
        type: "GET",
        url: host_be+"hapus-kat.php",
        data: key,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: (result) => {
          alert(result.msg);
          Parsingdata();
        },
      });
    }
    })
  
    

  
    $("#insert_kategori").submit(function (e) {
      e.preventDefault();
      var formData = new FormData(this);
      $.ajax({
        type: "POST",
        url: host_be+"insert_kategori.php",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        dataType: "json",
        success: (result) => {
          alert(result.msg);
          Parsingdata();
        },
      });
      $("input").val("");
    });
  });
  
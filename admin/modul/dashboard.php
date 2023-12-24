 <!-- Main content -->
 <?php
$koneksi = mysqli_connect('localhost', 'root', '', 'e-perpus');
// Query untuk menghitung jumlah data di tabel data_buku
$sql = "SELECT COUNT(*) AS total_buku FROM data_buku";
$result = $koneksi->query($sql);
$row = $result->fetch_assoc();
    $total_buku = $row['total_buku'];
?>
 <div class="col">
 <div class="container-fluid">
                      <div class="row mt-5">
                        <div class="col-4" style="text-align:center;vertical-align:middle;">
                          <span><i class="bi bi-file-earmark-text-fill"></i></i></i> Total Buku</span>
                          <div><?php echo $total_buku; ?></div>
                        </div>
                        
                        <!-- <div class="col-4" style="text-align:center;vertical-align:middle;">
                          <span><i class="bi bi-calendar-check-fill"></i></i> Total Download</span>
                          <div class="ml-4" style="color: #1ABB9C; font-weight: bold;">5</div>
                        </div> -->
                      </div>
                    </div>
                  

           
                  

           <!-- tombol search -->
          
           <!-- <div class="row x_title">
            <div class="col-md-6">
            </div>
          <div class="col-md-3 col-sm-3 col-xs-12 form-group pull-right top_search" style="margin-left: 220px; ">
            <div class="input-group" style="margin-top: 10px;">
              <form action="cari.php" class="form-inline mt-2 md-0" method="get" id="searchForm"></form>
              <input type="text" class="form-control" placeholder="Cari Disini...">
              <span class="input-group-btn">
                <button class="btn text-white" type="button" style="background-color: #2A3F54;"><a style="color: #1ABB9C">Cari</a></button>
              </span>
            </form>
            </div>
          </div> -->
          </div>
        </main><br><br>
    <!-- konten -->
  

    <!-- table -->
    <div class="container-fluid" style="margin-left: 220px;width: 1060px;">
      <div class="mx-5">
        <h5>Daftar Buku</h5>
        <hr class="bg-dark">
      <table class="table">
        <thead>
          <tr>
            <th class="col">No</th>
            <th class="col">Cover</th>
            <th class="col">ISBN</th>
            <th class="col">Judul Buku</th>
            <th class="col">Kategori</th>
            <th class="col">Penulis</th>
            <th class="col">Sinopsis</th>
            <th class="col">File</th>
            <!-- <th class="col">Unduhan</th> -->
            <th class="col">Action</th>
          </tr>
        </thead>
        <tbody id="table-body">
         
  
        </tbody>
      </table>
    </div>
 
<div class="mx-5 mt-5">
        <h3>Kategori Buku</h3>
        <p>Berbagai Kategori Buku Dari e-Perpus</p>
        <hr class="bg-dark ">

        <!-- form -->
        <div class="col">
          <div class="container-fluid">
            <div class="row mt-5">
              <div class="col">

                <table class="table" style="border-style: solid;">
                  <thead>
                    <tr style="border-style: solid;">
                      <th>form</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td >
                      <form id="insert_kategori">
                        <p>Kategori Baru</p>
                        <input type="text" name="nama_kategori" class="form-control" style="border: 2xp;" placeholder="Input kategori...">
                        <button type="submit" name="submit" class="btn text-white mt-3" style="background-color: #2A3F54; float:right;"><b style="color: #1ABB9C;">Tambahkan</b></button>
                      </form>
                      </td>
                    </tr>
                  </tbody>
                </table>
                

              </div>
              <div class="col">
                <table class="table" style="border-style: solid; text-align:center; vertical-align:middle;">
                  <thead style="border-style: solid;">
                    <tr>
                      <th>No</th>
                      <th>Kategori</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>

                  <tbody id="data_kat">
                    <!-- api table kategori -->
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        
          </tbody>
        </table>
      </div>
      </div>
    </div>
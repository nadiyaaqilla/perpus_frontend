

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
                        <td>
                       
                          <div class="container">
                            <form id="edit-produk">
                              <div class="row">                              
                                <div class="col-25">
                                  <label for="">Cover</label>
                                </div>
                                <div class="col-75">
                                  <div class="custom-file ">
                                    <input type="file" name="cover_bk" class="form-control" id="cover_bk">
                                </div>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-25">
                                  <label for="">Judul</label>
                                </div>
                                <div class="col-75">
                                  <input class="form-control" type="text" name="judul_bk" id="judul_bk">
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-25">
                                  <label for="">ISBN</label>
                                </div>
                                <div class="col-75">
                                  <input class="form-control" type="text" id="isbn" name="isbn_bk" readonly>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-25">
                                  <label for="">Penulis</label>
                                </div>
                                <div class="col-75">
                                  <input class="form-control" type="text" name="penulis_bk" id="penulis_bk">
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-25">
                                  <label for="">Kategori</label>
                                </div>
                                <div class="col-75">
                                  <select name="kode" id="kode_kategori">
                                  
                                  </select>
                                </div>
                               
                              </div>
                              <div class="row">
                                <div class="col-25">
                                  <label for="">Sinopsis</label>
                                </div>
                                <div class="col-75">
                                  <textarea name="sinop_bk" id="sinop_bk" style="height:100px"></textarea>
                                </div>
                              </div>
                              <div class="row">
                                <div class="col-25">
                                  <label for="">File</label>
                                </div>
                                <div class="col-75 input-group">
                                  <div class="custom-file ">
                                    <input type="file" name="file_bk" class="form-control" id="file_bk">                                    
                                </div>
                                </div>
                              </div>
                              <br>
                              <div class="row float-right">
                                <button class="btn text-white mt-1" type="submit" style="background-color: #2A3F54;"><a style="color: #1ABB9C">Edit</a></button>
                              </div>
                              
                            </form>
                          </div>
                        
                        </td>
                      </tr>
                    </tbody>
                  </table>
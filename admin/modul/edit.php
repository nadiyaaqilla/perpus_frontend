 <!-- konten -->
 <div class="mx-5">
          <h3 class="mt-5">Edit data buku e-Perpus</h3>
          <p>perubahan data buku pada e-perpus</p>
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
                        <td>

                          <div class="container">
                            <form action="/action_page.php">
                            <div class="row">
                              <div class="col-25">
                                <label for="fname">Cover</label>
                              </div>
                              <div class="col-75">
                                <input type="text" id="fname" name="firstname" value="Filosofi Teras.jpg">
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-25">
                                <label for="fname">Judul</label>
                              </div>
                              <div class="col-75">
                                <input type="text" id="fname" name="firstname" value="Filosofi Teras">
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-25">
                                <label for="lname">ISBN</label>
                              </div>
                              <div class="col-75">
                                <input type="text" id="lname" name="lastname" value="1004">
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-25">
                                <label for="country">Kategori</label>
                              </div>
                              <div class="col-75">
                                <select id="country" name="country">
                                  <option value="australia">Pendidikan</option>
                                  <option value="canada">Cerpen</option>
                                  <option value="usa">Novel</option>
                                </select>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-25">
                                <label for="subject">Sinopsis</label>
                              </div>
                              <div class="col-75">
                                <textarea id="sinopsis" name="sinopsis" style="height:100px">Buku Filosofi Teras menceritakan tentang Henry Manampiring, seorang praktisi periklanan dan penulis buku Filosofi Teras. Pada pertengahan tahun 2017, Henry menghadapi masalah mental, termasuk negative thinking dan depresi, yang kemudian didiagnosis sebagai Major Depressive Disorder oleh seorang psikiater.</textarea>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-25">
                                <label for="lname">File</label>
                              </div>
                              <div class="col-75 input-group">
                                <input type="text" id="lname" class="form-control" name="file" style="height: 40px;" value="filosofi teras.pdf">
                                <div class="input-group-append">
                                  <button class="btn text-white" style="height: 40px; background-color: #2A3F54;" type="button">select file</button>
                                </div>
                              </div>
                            </div>
                            <br>
                            <div class="row float-right">
                              <button class="btn text-white mt-1" type="button" style="background-color: #2A3F54;"><a style="color: #1ABB9C">Tambahkan</a></button>
                            </div>
                            </form>
                          </div>


                   
                        </td>
                      </tr>
                    </tbody>
                  </table>

            </div>
            </tbody>
          </table>
        </div>
        </div>
      </div>
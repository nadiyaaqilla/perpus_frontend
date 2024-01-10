<?php 
if (isset($_REQUEST['page']) && !empty($_REQUEST['page'])) {
    // Check if 'page' is a valid and expected value (add more conditions if needed)
    $validPages = array('home', 'daftar_isi', 'kategori', 'produk', 'search'); // Add valid pages
    if (!in_array($_REQUEST['page'], $validPages)) {
        // Invalid 'page' value, redirect to dashboard
        header("location:?page=home");
        exit();
    }
} else {
    // 'page' parameter not set or empty, redirect to dashboard
    header("location:?page=home");
    exit();
}
?>

<!doctype html>
<html lang="en">
  <head>

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <script src="env.js"></script>
    <title><?= $_REQUEST['page'] ?></title>
    
  </head>
  <body>
    
        <?php include "components/menu.php" ?>
        <?php include "modul/".$_REQUEST['page'].".php"; ?>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>
    <script src="<?= "script/".$_REQUEST['page'] ?>.js"></script>
  </body>
</html>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors" />
    <meta name="generator" content="Hugo 0.101.0" />
    <title>Dashboard Template · Bootstrap v4.6</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/4.6/examples/dashboard/" />

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
    <script src="../env.js"></script>
    <style>
        .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        @media (min-width: 768px) {
            .bd-placeholder-img-lg {
                font-size: 3.5rem;
            }
        }
    </style>

    <!-- Custom styles for this template -->
    <link href="../assets/css/dashboard.css" rel="stylesheet" />
    <link href="../assets/css/produk.css" rel="stylesheet" />
</head>

<body>
    <nav class="navbar navbar-light sticky-top flex-md-nowrap p-0" style="background-color: #dddddd">
        <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3"
            style="padding-top: 0.75rem; padding-bottom: 0.75rem;font-size: 1rem;" href="#"><i
                class="bi bi-shield-shaded"> </i>e-Perpus</a>
        <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
                <a class="nav-link" href="#">Admin</a>
            </li>
        </ul>
    </nav>

    <div class="container-fluid">
        <div class="row">
            <?php include "components/menu.php" ?>
            </div>
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <!-- konten kategori -->
                <?php include "modul/".$_REQUEST['page'].".php"; ?>
        

        <!-- akhir konten -->
        </main>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script> 
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>


    <!-- <script src="dashboard.js"></script> -->
    <script src="script/<?= $_REQUEST['page'] ?>.js"></script>
</body>

</html>
</body>

</html>
<html>
<head>
    <?php include $_SERVER['DOCUMENT_ROOT'] . '/php/includes/head.php'; ?>
</head>
<body onload="App.startAdminApp();">
<div class="main-content">
    <?php include $_SERVER['DOCUMENT_ROOT'] . '/php/includes/header.php'; ?>

    <?php
            // if ($is_login_flow) {
            //     include $_SERVER['DOCUMENT_ROOT'] . '/php/includes/admin-login.php';
            // } else {
                echo'<div class="admin-app"></div>';
            // }
    ?>

    <?php include $_SERVER['DOCUMENT_ROOT'] . '/php/includes/footer.php'; ?>
</div>
</body>
</html>
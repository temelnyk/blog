<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Admin page</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" href="/gfx/icons/favicon.ico">
<link rel="stylesheet" href="/css/style.css">
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
<script type="application/javascript" src="/js/app.js"></script>
<?php
    // Don't include JS into admin-login page
    // if (!isset($is_login_flow) || !$is_login_flow) {
        echo '<script type="application/javascript" src="/js/admin-app.js"></script>';
    // }
?>


<?php
//mengambil data dari form  
$nama = $_POST['nama'];
$email = $_POST['email'];
$pesan = $_POST['pesan'];
$ke = "fitrailyasa12@gmail.com";
$subjek = "Pesan dari Website";
$teks = "Nama = " . $nama . "\r\n  Email = " . $email . "\r\n Pesan =" . $pesan;
$headers = "From: noreply@yoursite.com" . "\r\n" .
    "CC: somebodyelse@example.com";
if ($email != NULL) {
    mail($ke, $subjek, $teks, $headers);
}
//mengalihkan
header("Location:index.html");
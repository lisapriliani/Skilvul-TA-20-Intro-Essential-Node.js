1. Mohon jelaskan apa itu Node.js? Apa perbedannya dengan JavaScript?
2. Mohon jelaskan arsitektur dari Node.js?
3. Ape perbedaan antara Built-in Module, External Module, dan Custom Module pada Node.js?
4. Sebutkan salah satu contoh dari Built-in Module, External Module, dan Custom Module pada Node.js?

Jawab

1. JavaScript adalah bahasa pemrograman untuk membangun aplikasi web, Node.js adalah environment yang dapat menjalankan program aplikasi berbasis JavaScript. Javascript adalah bahasa pemrograman sedangkan Node.js adalah runtime environment.

2. Arsitektur Node.js

   - Single thread, yaitu hanya mempunyai satu ruang antrian yang digunakan untuk menjalankan program
   - Even Loop, yaitu mengatasi antrian perintah yang akan dieksekusi dengan
     memeriksa terus menerus, ketika antrian kosong di call stack maka akan menambah antrian baru dari event queue sampai semua perintah selesai di eksekusi.
   - Server side scripting, yaitu dapat menjalankan javascript di server side menggunakan terminal command line

3. - Build-in module adalah module yang sudah otomatis terinstal dan siap digunakan
   - External module adalah module tambahan yang harus diinstal untuk dapat digunakan
   - Custom module adalah module yang dibuat sendiri dan dicustom sesuai dengan kebutuhan

4. Contoh module Build-in, External, dan Custom module
   - Build-in module : url
   - External module : sequelize
   - Custom module :
     exports.myDateTime = function () {
     return Date();
     };

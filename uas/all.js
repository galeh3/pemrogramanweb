document.getElementById("menu").innerHTML = '<a href="index.html">Home</a> | <a href="profil.html">Profil</a> | <a href="about.html">About</a> | <a href="galery.html">Gallery</a> | <a href="kontak.html">Kontak</a>';
document.getElementById("callMe").addEventListener('click', (e) => {
    e.preventDefault();
    confirm("Apakah anda ingin menghubungi saya?");
})
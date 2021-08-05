var nama = prompt('masukkan nama:');
var daerah = prompt('Dari kota manakah anda?:');
alert('Helo ' + nama + ' Selamat datang di website kami ');
// confirm('Apakah mau mengulangi nama dan daerah anda? ');


cards = `<div class="card-body">
          <h4 class="card-title">${nama}</h4>
          <h6 class="card-subtitle text-muted">${daerah}</h6>
          <p class="card-text deskripsi">Generasi pintar, generasi masa depan bangsa mencegah penularan Covid dari diri
              sendiri dan buat orang lain!</p>
          <a class="btn btn-outline-info" href="#covid">Selanjutnya..</a>
        </div>`;

$('.cardJs').html(cards);
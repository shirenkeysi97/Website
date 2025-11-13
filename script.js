// Daftar ayat Alkitab
const bibleVerses = [
  "Mazmur 23:1 — Tuhan adalah gembalaku, takkan kekurangan aku.",
  "Filipi 4:13 — Aku dapat melakukan segala sesuatu di dalam Dia yang memberi kekuatan kepadaku.",
  "Yeremia 29:11 — Sebab Aku mengetahui rancangan-rancangan yang ada pada-Ku mengenai kamu.",
  "Roma 8:28 — Allah turut bekerja dalam segala sesuatu untuk mendatangkan kebaikan bagi mereka yang mengasihi Dia.",
  "Yesaya 41:10 — Jangan takut, sebab Aku menyertai engkau.",
  "Amsal 3:5 — Percayalah kepada TUHAN dengan segenap hatimu.",
  "Matius 5:16 — Biarlah terangmu bercahaya di depan orang.",
  "Mazmur 46:2 — Allah itu bagi kita tempat perlindungan dan kekuatan.",
  "Efesus 4:32 — Hendaklah kamu ramah, penuh kasih, saling mengampuni.",
  "Yohanes 14:27 — Damai sejahtera Kutinggalkan bagimu.",
  "1 Korintus 13:13 — Demikianlah tinggal ketiga hal ini: iman, pengharapan dan kasih.",
  "Mazmur 121:2 — Pertolonganku ialah dari TUHAN, yang menjadikan langit dan bumi.",
  "Matius 11:28 — Marilah kepada-Ku semua yang letih lesu dan berbeban berat.",
  "Ulangan 31:8 — TUHAN akan berjalan di depanmu; Ia tidak akan meninggalkan engkau.",
  "Yakobus 1:5 — Jika ada di antara kamu kekurangan hikmat, mintalah kepada Allah.",
  "2 Korintus 5:7 — Sebab hidup kami ini adalah hidup karena percaya, bukan karena melihat."
];

// Buat daftar tanggal dari 15 Nov sampai 31 Des 2025
const planContainer = document.getElementById('plan-container');
const startDate = new Date(2025, 10, 15); // 15 November
const endDate = new Date(2025, 11, 31);   // 31 Desember

let i = 0;

for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
  const planItem = document.createElement('div');
  planItem.classList.add('plan-item');

  const dateText = document.createElement('div');
  dateText.classList.add('plan-date-text');
  dateText.textContent = `${d.getDate()} ${d.toLocaleString('id-ID', { month: 'short' })}`;

  const verseText = document.createElement('div');
  verseText.classList.add('plan-verse');
  verseText.textContent = bibleVerses[i % bibleVerses.length];

  planItem.appendChild(dateText);
  planItem.appendChild(verseText);
  planContainer.appendChild(planItem);

  i++;
}

// Tambah ayat custom user
function addVerse() {
  const name = document.getElementById('name').value.trim();
  const verse = document.getElementById('verseInput').value.trim();

  if (name && verse) {
    const newVerse = document.createElement('div');
    newVerse.className = 'custom-verse';
    newVerse.textContent = `"${verse}" — ${name}`;
    document.getElementById('customVerses').appendChild(newVerse);
    document.getElementById('name').value = '';
    document.getElementById('verseInput').value = '';
  } else {
    alert('Harap isi nama dan ayat terlebih dahulu!');
  }
}

// Daftar ayat acak
const bibleVerses = [
  "Mazmur 46:2 — Allah itu bagi kita tempat perlindungan dan kekuatan.",
  "Filipi 4:13 — Aku dapat melakukan segala sesuatu di dalam Dia yang memberi kekuatan kepadaku.",
  "Yeremia 29:11 — Sebab Aku ini mengetahui rancangan-rancangan yang ada pada-Ku mengenai kamu.",
  "Roma 8:28 — Allah turut bekerja dalam segala sesuatu untuk mendatangkan kebaikan bagi mereka yang mengasihi Dia.",
  "Mazmur 23:1 — Tuhan adalah gembalaku, takkan kekurangan aku.",
  "Yesaya 41:10 — Jangan takut, sebab Aku menyertai engkau.",
  "Matius 5:16 — Demikianlah hendaknya terangmu bercahaya di depan orang.",
  "Amsal 3:5 — Percayalah kepada TUHAN dengan segenap hatimu.",
  "Yohanes 14:27 — Damai sejahtera Kutinggalkan bagimu.",
  "Efesus 4:32 — Hendaklah kamu ramah seorang terhadap yang lain, penuh kasih mesra dan saling mengampuni."
];

// Membuat bubble tanggal otomatis (15 Nov - 31 Des)
const planContainer = document.getElementById('plan-container');
const startDate = new Date(2025, 10, 15); // 15 November
const endDate = new Date(2025, 11, 31);   // 31 Desember

for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
  const bubble = document.createElement('div');
  bubble.classList.add('plan-bubble');
  bubble.textContent = `${d.getDate()} ${d.toLocaleString('id-ID', { month: 'short' })}`;

  bubble.addEventListener('click', () => {
    bubble.classList.toggle('checked');

    const oldTooltip = bubble.nextElementSibling;
    if (oldTooltip && oldTooltip.classList.contains('tooltip')) {
      oldTooltip.remove();
      return;
    }

    const randomVerse = bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = randomVerse;
    bubble.insertAdjacentElement('afterend', tooltip);
  });

  planContainer.appendChild(bubble);
}

// Tambah ayat custom dari user
function addVerse() {
  const name = document.getElementById('name').value.trim();
  const verse = document.getElementById('verseInput').value.trim();
  if (name && verse) {
    const container = document.getElementById('customVerses');
    const newVerse = document.createElement('div');
    newVerse.className = 'custom-verse';
    newVerse.innerText = `"${verse}" — ${name}`;
    container.appendChild(newVerse);
    document.getElementById('name').value = '';
    document.getElementById('verseInput').value = '';
  } else {
    alert('Harap isi nama dan ayat terlebih dahulu!');
  }
}

// Daftar referensi ayat (tanpa isi)
const bibleVerses = [
  "Mazmur 23:1", "Filipi 4:13", "Yeremia 29:11", "Roma 8:28", "Yesaya 41:10",
  "Amsal 3:5", "Matius 5:16", "Mazmur 46:2", "Efesus 4:32", "Yohanes 14:27",
  "1 Korintus 13:13", "Mazmur 121:2", "Matius 11:28", "Ulangan 31:8",
  "Yakobus 1:5", "2 Korintus 5:7"
];

// Elemen kontainer plan
const planContainer = document.getElementById('plan-container');
const startDate = new Date(2025, 10, 15); // 15 November
const endDate = new Date(2025, 11, 31);   // 31 Desember

let i = 0;

// Buat daftar tanggal dari 15 Nov sampai 31 Des
for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
  const planItem = document.createElement('div');
  planItem.classList.add('plan-item');

  const dateText = document.createElement('div');
  dateText.classList.add('plan-date-text');
  dateText.textContent = `${d.getDate()} ${d.toLocaleString('id-ID', { month: 'short' })}`;

  const verseRef = document.createElement('div');
  verseRef.classList.add('plan-verse');
  verseRef.textContent = bibleVerses[i % bibleVerses.length];

  const checkmark = document.createElement('div');
  checkmark.classList.add('checkmark');
  checkmark.textContent = '✅';

  // Klik untuk toggle centang
  planItem.addEventListener('click', () => {
    planItem.classList.toggle('checked');
  });

  planItem.appendChild(dateText);
  planItem.appendChild(verseRef);
  planItem.appendChild(checkmark);
  planContainer.appendChild(planItem);
  i++;
}

// Tambahkan ayat custom user
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

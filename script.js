// Daftar referensi ayat (tanpa isi)
const bibleVerses = [
  "Mazmur 23:1", "Filipi 4:13", "Yeremia 29:11", "Roma 8:28", "Yesaya 41:10",
  "Amsal 3:5", "Matius 5:16", "Mazmur 46:2", "Efesus 4:32", "Yohanes 14:27",
  "1 Korintus 13:13", "Mazmur 121:2", "Matius 11:28", "Ulangan 31:8",
  "Yakobus 1:5", "2 Korintus 5:7"
];

const planContainer = document.getElementById('plan-container');
const startDate = new Date(2025, 10, 15);
const endDate = new Date(2025, 11, 31);

let i = 0;

// Membuat reading plan
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

  // Tambahkan fitur centang + simpan di localStorage
  planItem.addEventListener('click', () => {
    planItem.classList.toggle('checked');

    savePlanState();
  });

  planItem.dataset.index = i; // simpan index untuk referensi
  planItem.appendChild(dateText);
  planItem.appendChild(verseRef);
  planItem.appendChild(checkmark);
  planContainer.appendChild(planItem);
  i++;
}

// ========= LOCAL STORAGE UNTUK CUSTOM VERSE =========

// Fungsi tambah ayat custom
function addVerse() {
  const name = document.getElementById('name').value.trim();
  const verse = document.getElementById('verseInput').value.trim();

  if (!name || !verse) {
    alert('Harap isi nama dan ayat terlebih dahulu!');
    return;
  }

  const newVerse = {
    name: name,
    verse: verse
  };

  // Simpan ke localStorage
  let storedVerses = JSON.parse(localStorage.getItem("customVerses")) || [];
  storedVerses.push(newVerse);
  localStorage.setItem("customVerses", JSON.stringify(storedVerses));

  displayCustomVerses();

  document.getElementById('name').value = '';
  document.getElementById('verseInput').value = '';
}

// Menampilkan ayat custom yang tersimpan
function displayCustomVerses() {
  const container = document.getElementById('customVerses');
  container.innerHTML = "";

  const storedVerses = JSON.parse(localStorage.getItem("customVerses")) || [];

  storedVerses.forEach(v => {
    const div = document.createElement('div');
    div.className = 'custom-verse';
    div.textContent = `"${v.verse}" — ${v.name}`;
    container.appendChild(div);
  });
}

// ========= SIMPAN STATUS CENTANG BIBLE PLAN =========

// Simpan state plan (checked / tidak)
function savePlanState() {
  const items = document.querySelectorAll(".plan-item");
  const state = [];

  items.forEach(item => {
    state.push(item.classList.contains('checked'));
  });

  localStorage.setItem("planState", JSON.stringify(state));
}

// Load kembali state plan
function loadPlanState() {
  const state = JSON.parse(localStorage.getItem("planState"));

  if (!state) return;
  const items = document.querySelectorAll(".plan-item");

  items.forEach((item, idx) => {
    if (state[idx]) {
      item.classList.add('checked');
    }
  });
}

// LOAD DATA SAAT HALAMAN DIBUKA
window.onload = () => {
  displayCustomVerses();  // load ayat custom
  loadPlanState();        // load centang plan
};

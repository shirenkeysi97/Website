// === Animasi Scroll Ayat ===
const verses = document.querySelectorAll('.verse');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('show'), index * 300);
    }
  });
});
verses.forEach(v => observer.observe(v));

// === Tambahkan Ayat Custom ===
function addCustomVerse() {
  const name = document.getElementById('userName').value.trim();
  const text = document.getElementById('customVerse').value.trim();
  const display = document.getElementById('displayCustom');

  if (name && text) {
    display.innerHTML = `<strong>${name}</strong> menulis: <br><em>"${text}"</em>`;
    display.style.display = 'block';
  } else {
    alert('Mohon isi nama dan ayat terlebih dahulu.');
  }
}

// === Generate Bible Reading Plan (15 Nov - 31 Des 2025) ===
const readingPlan = document.getElementById('readingPlan');
const startDate = new Date('2025-11-15');
const endDate = new Date('2025-12-31');
const books = [
  "Kejadian", "Keluaran", "Imamat", "Bilangan", "Ulangan",
  "Yosua", "Mazmur", "Amsal", "Yesaya", "Yeremia",
  "Matius", "Markus", "Lukas", "Yohanes", "Roma"
];

const savedProgress = JSON.parse(localStorage.getItem('readingProgress')) || {};

while (startDate <= endDate) {
  const dateKey = startDate.toISOString().split('T')[0];
  const dateStr = startDate.toLocaleDateString('id-ID', { day: '2-digit', month: 'short' });
  const randomBook = books[Math.floor(Math.random() * books.length)];
  const randomChapter = Math.floor(Math.random() * 40) + 1;
  const bubble = document.createElement('div');
  bubble.className = 'plan-bubble';
  bubble.textContent = `${dateStr}: ${randomBook} ${randomChapter}`;
  if (savedProgress[dateKey]) bubble.classList.add('checked');

  bubble.addEventListener('click', () => {
    bubble.classList.toggle('checked');
    savedProgress[dateKey] = bubble.classList.contains('checked');
    localStorage.setItem('readingProgress', JSON.stringify(savedProgress));
  });

  readingPlan.appendChild(bubble);
  startDate.setDate(startDate.getDate() + 1);
}
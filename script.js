// Efek centang bubble plan
document.querySelectorAll('.plan-bubble').forEach(bubble => {
  bubble.addEventListener('click', () => {
    bubble.classList.toggle('checked');
  });
});

// Tambah ayat custom
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

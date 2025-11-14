// =============================
// LIST AYAT UNTUK RANDOM
// =============================
const bibleVerses = [
  "Mazmur 23:1", "Filipi 4:13", "Yeremia 29:11", "Roma 8:28", "Yesaya 41:10",
  "Amsal 3:5", "Matius 5:16", "Mazmur 46:2", "Efesus 4:32", "Yohanes 14:27",
  "1 Korintus 13:13", "Mazmur 121:2", "Matius 11:28", "Ulangan 31:8",
  "Yakobus 1:5", "2 Korintus 5:7"
];

const planContainer = document.getElementById("plan-container");

// =============================
// RANGE TANGGAL
// =============================
const startDate = new Date(2025, 10, 15); 
const endDate = new Date(2025, 11, 31);   

// =============================
// FUNGSI RANDOM AYAT
// =============================
function getRandomVerse() {
  return bibleVerses[Math.floor(Math.random() * bibleVerses.length)];
}

// =============================
// LOAD STATUS PLAN DARI LOCALSTORAGE
// =============================
let savedPlanStatus = JSON.parse(localStorage.getItem("readingPlan")) || {};

// =============================
// GENERATE BIBLE READING PLAN
// =============================
let index = 0;

for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {

  const itemId = `plan-${index}`;

  const planItem = document.createElement("div");
  planItem.classList.add("plan-item");
  if (savedPlanStatus[itemId]) planItem.classList.add("checked");

  const dateText = document.createElement("div");
  dateText.classList.add("plan-date-text");
  dateText.textContent = `${d.getDate()} ${d.toLocaleString("id-ID", { month: "short" })}`;

  const verseRef = document.createElement("div");
  verseRef.classList.add("plan-verse");
  verseRef.textContent = getRandomVerse();

  const checkmark = document.createElement("div");
  checkmark.classList.add("checkmark");
  checkmark.textContent = "✅";

  // EVENT SIMPAN STATUS CHECKLIST
  planItem.addEventListener("click", () => {
    planItem.classList.toggle("checked");
    savedPlanStatus[itemId] = planItem.classList.contains("checked");
    localStorage.setItem("readingPlan", JSON.stringify(savedPlanStatus));
  });

  planItem.appendChild(dateText);
  planItem.appendChild(verseRef);
  planItem.appendChild(checkmark);
  planContainer.appendChild(planItem);

  index++;
}

// =============================
// SIMPAN AYAT FAVORIT USER
// =============================
function addVerse() {
  const name = document.getElementById("name").value.trim();
  const verse = document.getElementById("verseInput").value.trim();

  if (!name || !verse) {
    alert("Harap isi nama dan ayat terlebih dahulu!");
    return;
  }

  const customVerses = JSON.parse(localStorage.getItem("customVerses")) || [];

  const newData = { name, verse };
  customVerses.push(newData);

  localStorage.setItem("customVerses", JSON.stringify(customVerses));

  displayCustomVerses();

  document.getElementById("name").value = "";
  document.getElementById("verseInput").value = "";
}

// =============================
// TAMPILKAN AYAT FAVORIT DARI LOCALSTORAGE
// =============================
function displayCustomVerses() {
  const container = document.getElementById("customVerses");
  container.innerHTML = "";

  const customVerses = JSON.parse(localStorage.getItem("customVerses")) || [];

  customVerses.forEach(item => {
    const div = document.createElement("div");
    div.className = "custom-verse";
    div.textContent = `"${item.verse}" — ${item.name}`;
    container.appendChild(div);
  });
}

// LOAD AYAT FAVORIT SAAT HALAMAN DIBUKA
displayCustomVerses();

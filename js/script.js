const cpuData = [
  { name: 'i9_13900KS', score: 3101 },
  { name: 'i9_13900KF', score: 2974 },
  { name: 'r9_7950X', score: 2931 },
  { name: 'r9_7900X', score: 2910 },
  { name: 'i7_13700KF', score: 2882 },
  { name: 'i7_13700K', score: 2829 },
  { name: 'r7_7700X', score: 2901 },
  { name: 'r7_7700', score: 2840 },
  { name: 'i5_13600KF', score: 2728 },
  { name: 'i5_13600K', score: 2661 },
  { name: 'r5_7600X', score: 2854 },
  { name: 'r5_7600', score: 2734 },
  { name: 'i3_13100F', score: 2278 },
  { name: 'i3_13100', score: 2249 },
  { name: 'r3_5350G', score: 1766 },
  { name: 'r3_5300G', score: 1704 },

];


document.addEventListener('DOMContentLoaded', function () {
  // Seçilen işlemcilerin dropdownları
  const intelDropdown = document.getElementById('intelProcessorDropdown');
  const amdDropdown = document.getElementById('amdProcessorDropdown');

  // Progress bar divleri
  const intelProgressBar = document.getElementById('intelProgressBar');
  const amdProgressBar = document.getElementById('amdProgressBar');

  // Kıyaslama butonu
  const kiyaslaButton = document.getElementById('kiyaslaButton');
  kiyaslaButton.addEventListener('click', kiyaslaCPUs);
});


function kiyaslaCPUs() {
  // Seçilen işlemcilerin değerlerini al
  const selectedIntelCPU = intelDropdown.value;
  const selectedAmdCPU = amdDropdown.value;

  // Seçilen işlemcilerin verilerini bul
  const intelCPU = cpuData.find(cpu => cpu.name === selectedIntelCPU);
  const amdCPU = cpuData.find(cpu => cpu.name === selectedAmdCPU);

  updateProgressBar(intelProgressBar, amdProgressBar, intelCPU.score, amdCPU.score);
}

// Progress barı güncelleme fonksiyonu
function updateProgressBar(intelPB, amdPB, score1, score2) {
  if (!intelPB || !amdPB) {
    console.error('Progress bar elementi bulunamadı.');
    return;
  }

  const totalScore = score1 + score2;
  const intelYuzdesi = (score1 / totalScore) * 100;
  const amdYuzdesi = (score2 / totalScore) * 100;

  intelPB.innerHTML = `Intel Score: ${score1}`;
  amdPB.innerHTML = `AMD Score:  ${score2}`;

  intelPB.style.width = `${intelYuzdesi}%`;
  amdPB.style.width = `${amdYuzdesi}%`;

  intelPB.classList.remove('bg-success', 'bg-danger');
  amdPB.classList.remove('bg-success', 'bg-danger');

  // Skorlara göre class eklemeleri
  if (score1 > score2) {
    intelPB.classList.add('bg-success');
    amdPB.classList.add('bg-danger');
  } else if (score1 < score2) {
    amdPB.classList.add('bg-success');
    intelPB.classList.add('bg-danger');
  } else {
    intelPB.classList.remove('bg-success', 'bg-danger');
    amdPB.classList.remove('bg-success', 'bg-danger');
  }

}

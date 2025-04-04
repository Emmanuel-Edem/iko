const dictionary = {
  water: { translation: 'mmong', audio: 'water.mp3' },
  fish: { translation: 'iyak', audio: 'fish.mp3' },
  come: { translation: 'di mi', audio: 'come.mp3' },
  'sit down': { translation: 'suk tie', audio: 'sit_down.mp3' },
  // Add more word mappings as needed
};

function translateWord() {
  const wordInput = document.getElementById('wordInput').value.toLowerCase().trim();
  const resultDiv = document.getElementById('result');
  const audioPlayer = document.getElementById('audioPlayer');
  const audioControls = document.getElementById('audioControls');
  const playBtn = document.getElementById('playBtn');
  const pauseBtn = document.getElementById('pauseBtn');
  const repeatBtn = document.getElementById('repeatBtn');

  const entry = dictionary[wordInput];

  if (entry) {
    resultDiv.innerHTML = `<p><strong>Translation:</strong> ${entry.translation}</p>`;
    audioPlayer.src = `audio/${entry.audio}`;
    audioControls.style.display = 'block';

    playBtn.onclick = () => {
      audioPlayer.play();
    };

    pauseBtn.onclick = () => {
      audioPlayer.pause();
    };

    repeatBtn.onclick = () => {
      audioPlayer.currentTime = 0;
      audioPlayer.play();
    };
  } else {
    resultDiv.innerHTML = '<p>Translation not found.</p>';
    audioControls.style.display = 'none';
  }
}

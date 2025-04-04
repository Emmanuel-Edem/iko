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

    const entry = dictionary[wordInput];

    if (entry) {
      resultDiv.innerHTML = `
        <p><strong>Translation:</strong> ${entry.translation}</p>
        <button id="playAudio" class="play-button">Play Pronunciation</button>
      `;
      document.getElementById('playAudio').onclick = () => {
        audioPlayer.src = entry.audio;
        audioPlayer.play();
      };
    } else {
      resultDiv.innerHTML = '<p>Translation not found.</p>';
    }
  }

// You can customize and translate your own end messages here!
const endMessages = [
    'Ihr habt das Ende erreicht!',
    '(oder lade die Seite einfach neu)',
  '👇 Hier könnt ihr eure Entscheidungen herunterladen 👇'
];

// You can customize and translate your own texts here!
const texts = {
  removeChoice: 'Auswahl entfernen',
  next: 'Weiter',
  finished: 'Fertig',
  round: 'Runde'
};

// Variables
const FALLBACK_IMG = 'https://freesvg.org/storage/img/thumb/errname1.png';
const CATEGORIES = ['Kiss', 'Marry', 'Eat'];
const cardElements = [];
let rounds = [];
let currentRoundIndex = 0;
let finished = false;

// Elementos del DOM / DOM Elements
const cardsContainer = document.getElementById('cards');
const navButtons = document.getElementById('nav-buttons');
const backButton = document.getElementById('back-btn');
const nextButton = document.getElementById('next-btn');
const downloadButton = document.getElementById('download-btn');
const resultElement = document.getElementById('result');
const resultText = document.getElementById('result-text');
const resultLabel = document.querySelector('.result-label');
const characterCounter = document.getElementById('character-counter');
const categoryTray = document.getElementById('category-tray');


// Randomize for each game round as otherwise, all characters will appear in the same order .-.
// I just copied it from here https://stackoverflow.com/a/12646864 xD
function shuffle(list) {
  const tmp = [...list];
  for (let i = tmp.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tmp[i], tmp[j]] = [tmp[j], tmp[i]];
  }
  return tmp;
}

// Logic to create and keep track of characters each round
function createRounds() {
  const shuffledCharacters = shuffle(characters);
  const newRounds = [];

  for (let i = 0; i < shuffledCharacters.length; i+=3) {
    const roundCharacters = shuffledCharacters.slice(i, i+3);
    newRounds.push({
      characters: roundCharacters,
      choices: roundCharacters.map(() => null),
      imageIndexes: [0, 0, 0]
    });
  }
  return newRounds;
}

// Create the round character cards HTML and add event listeners for the mouse drag and drop and image viewer
function createCard(cardindex) {
  const card = document.createElement('div');
  card.className = 'character-card';

  card.innerHTML = `
    <div class="image-wrap">
      <img class="character-image" src="" alt="figure" draggable="false">
      <button class="clear-button" title="${texts.removeChoice}">x</button>
      <button class="image-navigation prev">&lt;</button>
      <button class="image-navigation next">&gt;</button>
      <div class="choice-label"></div>
    </div>
    <div class="dots"></div>
    <h2 class="character-name"></h2>
  `;

  const image = card.querySelector('.character-image');
  image.addEventListener('click', () => toggleZoomedCard(card));

  card.addEventListener('dragover', event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    card.classList.add('drag-over');
  });

  card.addEventListener('dragleave', event => {
    if (!card.contains(event.relatedTarget)) {
      card.classList.remove('drag-over');
    }
  });

  card.addEventListener('drop', event => {
    event.preventDefault();
    card.classList.remove('drag-over');
    const category = event.dataTransfer.getData('text/plain');
    if (CATEGORIES.includes(category)) {
      setChoice(cardindex, category);
    }
  });

  card.querySelector('.clear-button').addEventListener('click', () =>
      removeChoice(cardindex)
  );
  card.querySelector('.prev').addEventListener('click', () =>
      showImage(cardindex, getImageIndex(cardindex)-1)
  );
  card.querySelector('.next').addEventListener('click', () =>
      showImage(cardindex, getImageIndex(cardindex)+1)
  );
  cardsContainer.appendChild(card);
  return card;
}

// Basically my dirty way of creating the cards using the categories length xD
function createCards() {
  for (let i = 0; i < CATEGORIES.length; i++) {
    cardElements.push(createCard(i));
  }
}

// Create the HTML for the category buttons
function createCategoryButtons() {
  CATEGORIES.forEach(category => {
    const button = document.createElement('div');
    button.className = `category-button category-${category.toLowerCase()}`;
    button.textContent = category;
    button.dataset.category = category;
    button.draggable = true;

    button.addEventListener('dragstart', event => {
      event.dataTransfer.setData('text/plain', category);
      event.dataTransfer.effectAllowed = 'move';
    });
    categoryTray.appendChild(button);
  });
}

// Helper Function to get the image index if there are multiple images in the characters entry
function getImageIndex(cardindex) {
  return rounds[currentRoundIndex].imageIndexes[cardindex];
}

// Logic for showing the current image and switching if there are multiple of them
function showImage(cardindex, index) {
  const round = rounds[currentRoundIndex];
  const images = round.characters[cardindex].images;
  const newIndex = Math.max(0, Math.min(index, images.length - 1));
  round.imageIndexes[cardindex] = newIndex;

  const card = cardElements[cardindex];
  const image = card.querySelector('.character-image');

  // if there are errors with the image, set it to the fallback image
  image.style.opacity = 0;
  setTimeout(() => {
    image.src = images[newIndex] || FALLBACK_IMG;
    image.style.opacity = '1';
  }, 120);

  const hasMultipleImages = images.length > 1;
  const dotsContainer = card.querySelector('.dots');
  const prevButton = card.querySelector('.prev');
  const nextImageButton = card.querySelector('.next');

  dotsContainer.innerHTML = '';
  if (hasMultipleImages) {
    dotsContainer.style.display = 'flex';
    prevButton.style.display = 'flex';
    nextImageButton.style.display = 'flex';

    for (let i = 0; i < images.length; i++) {
      const dot = document.createElement('span');
      dot.className = 'dot';
      if (i === newIndex) {
       dot.className += ' dot-active';
      }
      dot.addEventListener('click', () => showImage(cardindex, i));
      dotsContainer.appendChild(dot);
    }
    prevButton.classList.toggle('navigation-disabled', newIndex === 0);
    nextImageButton.classList.toggle('navigation-disabled', newIndex === images.length - 1);
  }
  else {
    dotsContainer.style.display = 'none';
    prevButton.style.display = 'none';
    nextImageButton.style.display = 'none';
  }
}

// Close zoomed in card if it is zoomed in
function closeZoomedCard() {
  const zoomedCard = cardsContainer.querySelector('.zoomed');
  if (zoomedCard) {
    zoomedCard.classList.remove('zoomed');
    cardsContainer.style.height = '';
  }
}

// Toggle the zoomed in state
function toggleZoomedCard(card) {
  if (card.classList.contains('zoomed')) {
    closeZoomedCard();
  }
  else {
    cardsContainer.style.height = cardsContainer.offsetHeight + 'px';
    card.classList.add('zoomed');
  }
}

// Zooms out of the image when pressing ESC
function closeZoomedCardOnESC(event) {
  if (event.key === 'Escape') {
    closeZoomedCard();
  }
}

// Zooms out of the image when clicking outside of it when it is zoomed in
function closeZoomedCardOutside(event) {
  const zoomedCard = cardsContainer.querySelector('.zoomed');
  if (!zoomedCard) {
    return;
  }

  const clicked = event.target.closest('.character-image, .image-navigation, .clear-button, .dot');
  if (clicked) {
    return;
  }

  closeZoomedCard();
}

// Logic to set the choice of the selected category
function setChoice(cardindex, category) {
  const round = rounds[currentRoundIndex];

  round.choices = round.choices.map(choice => {
    if (choice === category) {
      return null;
    } else {
      return choice;
    }
  });

  round.choices[cardindex] = category;
  updateChoices();
}

// Logic to remove the choice
function removeChoice(cardindex) {
  rounds[currentRoundIndex].choices[cardindex] = null;
  updateChoices();
}

// Logic to update the choice for each character and the navigation buttons
function updateChoices() {
  const round = rounds[currentRoundIndex];

  cardElements.forEach((card, cardIndex) => {
    const choice = round.choices[cardIndex];

    card.classList.remove('pick-kiss', 'pick-marry', 'pick-eat');
    if (choice) {
      card.classList.add('pick-' + choice.toLowerCase());
    }

    const choiceLabel = card.querySelector('.choice-label');
    const clearButton = card.querySelector('.clear-button');
    if (choice) {
      choiceLabel.textContent = choice;
      choiceLabel.style.display = 'block';
      clearButton.style.display = 'flex';
    }
    else {
      choiceLabel.style.display = 'none';
      clearButton.style.display = 'none';
    }
  });

  categoryTray.querySelectorAll('.category-button').forEach(button => {
    const isPlaced = round.choices.includes(button.dataset.category);
    button.classList.toggle('taken', isPlaced);
  });

  // Only enable the next-button if all characters got their choice
  const allChosen = round.choices.every(choice => choice !== null);
  nextButton.disabled = !allChosen;

  // Display finished or next on the next-button if it's the last round or there are more to go
  if (currentRoundIndex === rounds.length - 1) {
    nextButton.textContent = texts.finished;
  }
  else {
    nextButton.textContent = texts.next;
  }
}

// Logic to render the image grid
function renderRound() {
  const round = rounds[currentRoundIndex];

  // If the round has < 3 characters, then just hide the card and not mess up the grid
  cardElements.forEach((card, cardindex) => {
    const hasCharacter = cardindex < round.characters.length;
    if (hasCharacter) {
      card.style.visibility = 'visible';
    }
    else {
      card.style.visibility = 'hidden';
      return;
    }

    card.querySelector('.character-name').textContent = round.characters[cardindex].name;
    showImage(cardindex, round.imageIndexes[cardindex]);
  });

  characterCounter.textContent = `${texts.round} ${currentRoundIndex + 1} / ${rounds.length}`;
  backButton.disabled = currentRoundIndex === 0;

  updateChoices();
  updatePreviousChoice();
  updateDownloadButton();
}

// Logic for keeping track of the previous round and displaying it
function updatePreviousChoice() {
  if (currentRoundIndex === 0) {
    resultLabel.classList.remove('visible');
    resultText.textContent = '';
    return;
  }

  const previousRound = rounds[currentRoundIndex - 1];
  const parts = [];
  CATEGORIES.forEach(category => {
    const characterIndex = previousRound.choices.indexOf(category);
    if (characterIndex !== -1) {
      parts.push(`${category}: ${previousRound.characters[characterIndex].name}`);
    }
  });

  resultLabel.classList.add('visible');
  resultText.textContent = parts.join(' . ');
}

// Helper function for the next button and to check whether it's the end of the game
function goNext() {
  if (currentRoundIndex === rounds.length - 1) {
    showEndMessage();
  }
  else {
    currentRoundIndex++;
    renderRound();
  }
}

// Helper function to go back one round
function goBack() {
  if (currentRoundIndex === 0) {
    return;
  }
  currentRoundIndex--;
  renderRound();
}

// Logic for keeping track of all the responses for the overview and csv download
function getResponses() {
  let finishedRounds;
  const responses = [];

  if (finished) {
    finishedRounds = rounds;
  } else {
    finishedRounds = rounds.slice(0, currentRoundIndex);
  }

  finishedRounds.forEach(round => {
    round.characters.forEach((character, i) => {
      responses.push({
        character: character.name,
        image: character.images[0] || FALLBACK_IMG,
        response: round.choices[i]
      });
    });
  });

  return responses;
}

// Función para mostrar el botón de descarga / Function to show the download button
function updateDownloadButton() {
  downloadButton.style.display = getResponses().length > 0 ? 'inline-block' : 'none';
}

// Función para descargar el historial como CSV / Function to download the history as CSV
function downloadCSV() {
  const csvContent = [
    'Character,Response',
    ...getResponses().map(r => `"${r.character}",${r.response}`)
  ].join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `kiss-marry-eat-${new Date().toISOString()}.csv`;
  a.click();
  window.URL.revokeObjectURL(url);
}

// Create an overview of all the votes in a grid
function renderOverview() {
  const container = document.getElementById('overview-grid');
  container.innerHTML = '';

  getResponses().forEach(response => {
    const category = response.response.toLowerCase();

    const cell = document.createElement('div');
    cell.className = 'overview-cell';

    const image = document.createElement('img');
    image.src = response.image;

    const overlay = document.createElement('div');
    overlay.className = 'overlay-' + category;

    const label = document.createElement('span');
    label.className = 'overview-label';
    label.textContent = `${response.response}: ${response.character}`;

    cell.append(image, overlay, label);
    container.appendChild(cell);
  });

  container.style.display = 'grid';
}

// Función para mostrar mensaje final (Al acabarse la lista de personajes) / Function to show end message (When the character list runs out)
function showEndMessage() {
  finished = true;
  cardsContainer.style.display = 'none';
  navButtons.style.display = 'none';
  characterCounter.textContent = '';
  categoryTray.style.display = 'none';

  // You can customize the text for the end messages in the variable "endmessages" at the top
  resultElement.innerHTML = `
    <h2 style="color: #2196F3; margin: 5px 0;">${endMessages[0]}</h2>
    <p style="color:rgb(124, 128, 129); font-size: 12px; margin: 2px 0;">${endMessages[1]}</p>
    <p style="color: white; margin: 20px 0;">${endMessages[2]}</p>
  `;

  downloadButton.style.display = 'inline-block';
  downloadButton.style.animation = 'pulse 1.5s infinite';
  renderOverview();
}

function start() {
  rounds = createRounds();
  createCards();
  createCategoryButtons();
  renderRound();
}

// Add other Event Listeners
nextButton.addEventListener('click', goNext);
backButton.addEventListener('click', goBack);
downloadButton.addEventListener('click', downloadCSV);
document.addEventListener('keydown', closeZoomedCardOnESC);
document.addEventListener('click', closeZoomedCardOutside);

start();

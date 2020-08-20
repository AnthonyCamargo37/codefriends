let boardSize = 6;
const boardItems = Math.pow(boardSize, 2);
let clicked = false;
let guessCount = 1;
let firstEmoji;
let firstEmojiCard;
let totalTurns = 0;

let emojis = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "😍",
  "🥰",
  "😘",
  "😗",
  "😙",
  "😚",
  "😋",
];

function shuffle(array) {
  let j;
  for (let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createEmojisArray() {
  let emojisArray = emojis;

  emojisArray = shuffle(emojisArray).slice(0, boardItems / 2);
  emojisArray = shuffle(emojisArray.concat(emojisArray));

  return emojisArray;
}

function flipCard() {
  let card;
  card = document.getElementsByClassName("card")[event.target.id];
  card.classList.add("flippedCard");
  card.appendChild(document.createTextNode(emojisArray[event.target.id]));
  console.log(card.innerHTML);
  card.removeEventListener("click", selectCard);
  return card;
}

function delay() {
  setTimeout(window.alert, 2000, "test");
}

function selectCard(event) {
  card = flipCard();
  if (guessCount === 1) {
    firstEmoji = card.innerHTML;
    firstEmojiCard = card;
    guessCount++;
  } else if (guessCount === 2 && firstEmoji === emojisArray[event.target.id]) {
    setTimeout(() => {
      card.className = "completedCard";
      card.innerHTML = "";
      firstEmojiCard.className = "completedCard";
      firstEmojiCard.innerHTML = "";

      guessCount = 1;
      totalTurns++;
      document.getElementsByClassName(
        "menu"
      )[0].innerHTML = `Total Turns: ${totalTurns}`;
    }, 1500);
  } else if (guessCount === 2 && firstEmoji !== emojisArray[event.target.id]) {
    setTimeout(() => {
      card.className = "card";
      card.innerHTML = "";
      firstEmojiCard.className = "card";
      firstEmojiCard.innerHTML = "";

      card.addEventListener("click", selectCard);
      firstEmojiCard.addEventListener("click", selectCard);

      firstEmojiCard = "";
      guessCount = 1;
      totalTurns++;
      document.getElementsByClassName(
        "menu"
      )[0].innerHTML = `Total Turns: ${totalTurns}`;
    }, 1500);
  }
}

function buildBoard() {
  let card = [];

  for (i = 0; i < boardItems; i++) {
    newDiv = document.createElement("div");
    newDiv.className = "card";
    newDiv.id = i;

    newDiv.addEventListener("click", selectCard);
    document.getElementById("board").appendChild(newDiv);
  }
}
buildBoard();
let emojisArray = createEmojisArray();
console.log(emojisArray);

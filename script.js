const puzzleContainer = document.getElementById("puzzle-container");
const puzzlePieces = document.querySelectorAll(".puzzle-piece");

puzzlePieces.forEach((piece) => {
  piece.style.backgroundImage = `url(${piece.dataset.src})`;
  piece.addEventListener("click", () => {
    zoomIn(piece);
  });
});

function zoomIn(piece) {
  puzzleContainer.classList.add("zoom-in");
  puzzleContainer.innerHTML = "";
  const title = document.createElement("h2");
  title.textContent = piece.dataset.text;
  puzzleContainer.appendChild(title);
  const imageSrc = piece.dataset.src;
  const imagePieces = 20; // number of puzzle pieces to create
  const pieceWidth = 150 / Math.sqrt(imagePieces); // width of each piece
  for (let i = 0; i < imagePieces; i++) {
    for (let j = 0; j < imagePieces; j++) {
      const newPiece = document.createElement("div");
      newPiece.classList.add("puzzle-piece");
      newPiece.style.width = pieceWidth + "px";
      newPiece.style.height = pieceWidth + "px";
      newPiece.style.backgroundImage = `url(${imageSrc})`;
      newPiece.style.backgroundPosition = `-${pieceWidth * j}px -${pieceWidth * i}px`;
      puzzleContainer.appendChild(newPiece);
      newPiece.addEventListener("click", () => {
        zoomIn(newPiece);
      });
    }
  }
}


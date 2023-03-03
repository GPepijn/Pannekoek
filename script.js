const puzzlePieces = document.querySelectorAll('.puzzle-piece');

function zoomIn() {
  const text = this.dataset.text;
  const puzzle = createPuzzle(text);
  puzzleContainer.innerHTML = '';
  puzzleContainer.appendChild(puzzle);
}

function createPuzzle(text) {
  const puzzle = document.createElement('div');
  puzzle.classList.add('puzzle-container');
  const title = document.createElement('h2');
  title.textContent = text;
  puzzle.appendChild(title);
  for (let i = 1; i <= 20; i++) {
    const piece = document.createElement('div');
    piece.classList.add('puzzle-piece');
    piece.dataset.text = `Stukje ${i}`;
    piece.textContent = `Tekst voor stukje ${i}`;
    piece.addEventListener('

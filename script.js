// Define variables
const pieces = document.querySelectorAll('.piece');
const puzzle = document.querySelector('.puzzle');
const originalText = document.querySelector('.original-text');

// Add event listeners to each piece
pieces.forEach(piece => {
  piece.addEventListener('click', () => {
    // Replace the puzzle with a new one
    puzzle.innerHTML = '';
    const newPuzzle = createPuzzle(piece.textContent);
    puzzle.appendChild(newPuzzle);

    // Update the original text
    originalText.textContent = piece.textContent;
  });
});

// Function to create a new puzzle
function createPuzzle(text) {
  const words = text.trim().split(' ');
  const numPieces = words.length;

  const puzzle = document.createElement('div');
  puzzle.classList.add('puzzle');

  // Create the puzzle pieces
  for (let i = 0; i < numPieces; i++) {
    const piece = document.createElement('div');
    piece.classList.add('piece');
    piece.textContent = words[i];
    puzzle.appendChild(piece);
  }

  return puzzle;
}

const poemLines = document.querySelectorAll('.poema p');
let currentLineIndex = 0;

function showNextLine() {
  if (currentLineIndex < poemLines.length) {
    const currentLine = poemLines[currentLineIndex];
    const letras = currentLine.textContent.trim().split('');
    currentLine.textContent = '';
    letras.forEach(letra => {
      const span = document.createElement('span');
      span.textContent = letra;
      span.classList.add('letra');
      currentLine.appendChild(span);
    });
    currentLine.classList.add('mostrado');
    setTimeout(() => {
      currentLine.classList.remove('mostrado');
      currentLineIndex++;
      showNextLine();
    }, 10000);
  }
}

showNextLine();
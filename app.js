// Version 1
document.addEventListener('DOMContentLoaded', function(){

  const grid = new Object();

  grid.board = document.getElementById('board');
  grid.randomColor = () => {
    return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
  }
  grid.setGridDimensions = (r, c) => {
    for (let i = 0; i < r; i++) {
      const row = document.createElement('div');
      row.setAttribute('class','row');
      for (let j = 0; j < c; j++) {
        const col = document.createElement('div');
        col.setAttribute('class','col');
        col.addEventListener('click', () => {
          col.style.backgroundColor = grid.randomColor();
        })

        row.appendChild(col);
      }
      grid.board.appendChild(row)
    }
  }

  grid.setGridDimensions(3,3);
});

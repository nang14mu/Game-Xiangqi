import { Board } from './core/Board.ts';

function initGame() {
  const board = new Board();
  
  // TODO: 2. Khởi tạo giao diện đồ họa tại đây để nối với DOM

  // TODO: 3. Khởi tạo bộ máy kiểm tra luật & AI Controller

  console.log('[System] Xiangqi logic engine initialized.');
  console.log('[System] Board loaded pieces:', board.pieces.size);
}

document.addEventListener('DOMContentLoaded', () => {
  initGame();
});

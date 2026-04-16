import { Board } from './core/Board.ts';

function initGame() {
  // 1. Khởi tạo dữ liệu game (Bộ nhớ)
  const board = new Board();
  
  // TODO: 2. Khởi tạo giao diện đồ họa (BoardRenderer) tại đây để nối với DOM

  // TODO: 3. Khởi tạo bộ máy kiểm tra luật (RuleEngine) & AI Controller

  console.log('[System] Xiangqi logic engine initialized.');
  console.log('[System] Board loaded pieces:', board.pieces.size);
}

document.addEventListener('DOMContentLoaded', () => {
  initGame();
});

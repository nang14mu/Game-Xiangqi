import { Piece } from './Piece.ts';
import { PlayerColor, PieceType } from './types.ts';

export class Board {
  // Mảng 2 chiều đại diện cho bàn cờ. 10 dòng (y) x 9 cột (x). Null nếu ô trống.
  public grid: (Piece | null)[][];
  // Map lưu trữ các quân cờ hiện có trên bàn, dễ tìm kiếm theo ID
  public pieces: Map<string, Piece> = new Map();

  constructor() {
    this.grid = Array.from({ length: 10 }, () => Array(9).fill(null));
    this.setupInitialBoard();
  }

  private setupInitialBoard() {
    // Đội hình khởi tạo: y=0..4 là Quân Đen, y=5..9 là Quân Đỏ
    const initConfig: { type: PieceType; color: PlayerColor; x: number; y: number }[] = [];

    // --- QUÂN ĐEN ---
    initConfig.push({ type: PieceType.Chariot, color: PlayerColor.Black, x: 0, y: 0 });
    initConfig.push({ type: PieceType.Horse, color: PlayerColor.Black, x: 1, y: 0 });
    initConfig.push({ type: PieceType.Elephant, color: PlayerColor.Black, x: 2, y: 0 });
    initConfig.push({ type: PieceType.Advisor, color: PlayerColor.Black, x: 3, y: 0 });
    initConfig.push({ type: PieceType.General, color: PlayerColor.Black, x: 4, y: 0 });
    initConfig.push({ type: PieceType.Advisor, color: PlayerColor.Black, x: 5, y: 0 });
    initConfig.push({ type: PieceType.Elephant, color: PlayerColor.Black, x: 6, y: 0 });
    initConfig.push({ type: PieceType.Horse, color: PlayerColor.Black, x: 7, y: 0 });
    initConfig.push({ type: PieceType.Chariot, color: PlayerColor.Black, x: 8, y: 0 });
    initConfig.push({ type: PieceType.Cannon, color: PlayerColor.Black, x: 1, y: 2 });
    initConfig.push({ type: PieceType.Cannon, color: PlayerColor.Black, x: 7, y: 2 });
    for (let x = 0; x <= 8; x += 2) {
      initConfig.push({ type: PieceType.Soldier, color: PlayerColor.Black, x: x, y: 3 });
    }

    // --- QUÂN ĐỎ ---
    initConfig.push({ type: PieceType.Chariot, color: PlayerColor.Red, x: 0, y: 9 });
    initConfig.push({ type: PieceType.Horse, color: PlayerColor.Red, x: 1, y: 9 });
    initConfig.push({ type: PieceType.Elephant, color: PlayerColor.Red, x: 2, y: 9 });
    initConfig.push({ type: PieceType.Advisor, color: PlayerColor.Red, x: 3, y: 9 });
    initConfig.push({ type: PieceType.General, color: PlayerColor.Red, x: 4, y: 9 });
    initConfig.push({ type: PieceType.Advisor, color: PlayerColor.Red, x: 5, y: 9 });
    initConfig.push({ type: PieceType.Elephant, color: PlayerColor.Red, x: 6, y: 9 });
    initConfig.push({ type: PieceType.Horse, color: PlayerColor.Red, x: 7, y: 9 });
    initConfig.push({ type: PieceType.Chariot, color: PlayerColor.Red, x: 8, y: 9 });
    initConfig.push({ type: PieceType.Cannon, color: PlayerColor.Red, x: 1, y: 7 });
    initConfig.push({ type: PieceType.Cannon, color: PlayerColor.Red, x: 7, y: 7 });
    for (let x = 0; x <= 8; x += 2) {
      initConfig.push({ type: PieceType.Soldier, color: PlayerColor.Red, x: x, y: 6 });
    }

    let idCounter = 1;
    for (const config of initConfig) {
      const id = `${config.color}_${config.type}_${idCounter++}`;
      const piece = new Piece(id, config.type, config.color, { x: config.x, y: config.y });
      this.grid[config.y][config.x] = piece;
      this.pieces.set(id, piece);
    }
  }

  public getPieceAt(x: number, y: number): Piece | null {
    if (this.isOutOfBounds(x, y)) return null;
    return this.grid[y][x];
  }

  public isOutOfBounds(x: number, y: number): boolean {
    return x < 0 || x > 8 || y < 0 || y > 9;
  }

  // Di chuyển quân cờ trên dữ liệu (chưa xử lý luật lệ đúng sai ở hàm này)
  public movePiece(pieceId: string, toX: number, toY: number): boolean {
    const piece = this.pieces.get(pieceId);
    if (!piece) return false;
    if (this.isOutOfBounds(toX, toY)) return false;

    const targetPiece = this.getPieceAt(toX, toY);
    if (targetPiece) {
      if (targetPiece.color === piece.color) {
        return false; // Không ăn quân mình
      }
      this.pieces.delete(targetPiece.id); // Ăn quân địch
    }

    // Cập nhật tọa độ trên grid
    this.grid[piece.position.y][piece.position.x] = null;
    this.grid[toY][toX] = piece;

    // Cập nhật tọa độ của đối tượng
    piece.position.x = toX;
    piece.position.y = toY;

    return true;
  }
}

import type { PlayerColor, PieceType, Position } from './types.ts';

export class Piece {
  id: string;
  type: PieceType;
  color: PlayerColor;
  position: Position;

  constructor(id: string, type: PieceType, color: PlayerColor, position: Position) {
    this.id = id;
    this.type = type;
    this.color = color;
    this.position = position;
  }
}

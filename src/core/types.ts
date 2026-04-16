export const PlayerColor = {
  Red: 'red',
  Black: 'black',
} as const;

export type PlayerColor = typeof PlayerColor[keyof typeof PlayerColor];

export const PieceType = {
  General: 'general',   // Tướng / Soái
  Advisor: 'advisor',   // Sĩ
  Elephant: 'elephant', // Tượng / Bồ
  Horse: 'horse',       // Mã
  Chariot: 'chariot',   // Xe
  Cannon: 'cannon',     // Pháo
  Soldier: 'soldier',   // Tốt / Binh
} as const;

export type PieceType = typeof PieceType[keyof typeof PieceType];

export interface Position {
  x: number; // Cột (0-8)
  y: number; // Dòng (0-9)
}

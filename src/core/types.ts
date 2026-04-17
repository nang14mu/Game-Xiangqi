export const PlayerColor = {
  Red: 'red',
  Black: 'black',
} as const;

export type PlayerColor = typeof PlayerColor[keyof typeof PlayerColor];

export const PieceType = {
  General: 'general',   
  Advisor: 'advisor',   
  Elephant: 'elephant', 
  Horse: 'horse',       
  Chariot: 'chariot',   
  Cannon: 'cannon',     
  Soldier: 'soldier',   
} as const;

export type PieceType = typeof PieceType[keyof typeof PieceType];

export interface Position {
  x: number; 
  y: number; 
}

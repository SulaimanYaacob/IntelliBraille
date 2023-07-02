export interface Braille {
  convert: (text: string) => string;
  toBraille: (text: string) => string;
  toText: (text: string) => string;
  read: (text: string) => string;
}

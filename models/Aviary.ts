export type Material = 'glass';

export abstract class Aviary {
  height: number;
  material: string;

  constructor(height: number, material: Material = 'glass') {
    this.height = height;
    this.material = material;
  }

  abstract getEffectiveSquare(): number;

  getVolume = () => {};
}

export type Material = 'glass';

export abstract class Aviary {
  name: string;
  height: number;
  material: string;

  constructor(name: string, height: number, material: Material = 'glass') {
    this.name = name;
    this.height = height;
    this.material = material;
  }

  abstract printVolume: () => number;

  abstract printSquare: () => number;
}

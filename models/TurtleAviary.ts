import { hasLake } from '../interfaces/hasLake';
import { Aviary } from './Aviary';

export class TurtleAviary extends Aviary implements hasLake {
  waterTemperature: number;
  lakeWidth: number;
  lakeLength: number;

  constructor(
    waterTemperature: number,
    lakeWidth: number,
    lakeLength: number,
    height: number = 2
  ) {
    super('Turtle', height);
    this.waterTemperature = waterTemperature;
    this.lakeWidth = lakeWidth;
    this.lakeLength = lakeLength;
  }

  printSquare = () => {
    return this.lakeWidth * this.lakeLength;
  };

  printVolume = () => {
    return this.printSquare() * this.height;
  };
}

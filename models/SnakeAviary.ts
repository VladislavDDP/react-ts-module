import { hasLand } from '../interfaces/hasLand';
import { Aviary } from './Aviary';

export class SnakeAviary extends Aviary implements hasLand {
  airTemperature: number;
  landWidth: number;
  landLength: number;

  constructor(
    airTemperature: number,
    landWidth: number,
    landLength: number,
    height: number = 0.75
  ) {
    super('Snake', height);
    this.airTemperature = airTemperature;
    this.landWidth = landWidth;
    this.landLength = landLength;
  }

  printSquare = () => {
    return this.landWidth * this.landLength;
  };

  printVolume = () => {
    return this.printSquare() * this.height;
  };
}

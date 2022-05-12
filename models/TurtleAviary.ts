import { hasLake } from '../interfaces/hasLake';
import { Aviary } from './Aviary';

export class TurtleAviary extends Aviary implements hasLake {
  waterTemperature: number;
  lakeWidth: number;
  lakeLength: number;

  constructor(
    height: number = 2,
    waterTemperature: number,
    lakeWidth: number,
    lakeLength: number
  ) {
    super(height);
    this.waterTemperature = 25;
    this.lakeWidth = 5;
    this.lakeLength = 6;
  }

  getEffectiveSquare = () => {
    return this.lakeWidth * this.lakeLength;
  };
}

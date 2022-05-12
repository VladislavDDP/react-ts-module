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
    super(height);
    this.waterTemperature = waterTemperature;
    this.lakeWidth = lakeWidth;
    this.lakeLength = lakeLength;
  }

  getEffectiveSquare = () => {
    return this.lakeWidth * this.lakeLength;
  };
}

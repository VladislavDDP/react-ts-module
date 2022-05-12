import { hasLake } from '../interfaces/hasLake';
import { hasLand } from '../interfaces/hasLand';
import { Aviary } from './Aviary';

export class ChameleonAviary extends Aviary implements hasLand, hasLake {
  waterTemperature: number;
  lakeWidth: number;
  lakeLength: number;

  airTemperature: number;
  landWidth: number;
  landLength: number;

  constructor(
    height: number = 0.5,
    waterTemperature: number,
    lakeWidth: number,
    lakeLength: number,
    airTemperature: number,
    landWidth: number,
    landLength: number
  ) {
    super(height);
    this.waterTemperature = 20;
    this.lakeWidth = 1;
    this.lakeLength = 15;
    this.airTemperature = 35;
    this.landWidth = 3.9;
    this.landLength = 4.9;
  }

  getEffectiveSquare = () => {
    return this.lakeWidth * this.lakeLength + this.landWidth * this.landLength;
  };
}

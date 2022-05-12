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
    waterTemperature: number,
    lakeWidth: number,
    lakeLength: number,
    airTemperature: number,
    landWidth: number,
    landLength: number,
    height: number = 0.5
  ) {
    super(height);
    this.waterTemperature = waterTemperature;
    this.lakeWidth = lakeWidth;
    this.lakeLength = lakeLength;
    this.airTemperature = airTemperature;
    this.landWidth = landWidth;
    this.landLength = landLength;
  }

  getEffectiveSquare = () => {
    return this.lakeWidth * this.lakeLength + this.landWidth * this.landLength;
  };
}

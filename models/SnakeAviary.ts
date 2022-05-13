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
    height: number = 1
  ) {
    super(height);
    this.airTemperature = airTemperature;
    this.landWidth = landWidth;
    this.landLength = landLength;
  }

  showLandInfo: () => void;

  getEffectiveSquare = () => {
    return this.landWidth * this.landLength;
  };
}

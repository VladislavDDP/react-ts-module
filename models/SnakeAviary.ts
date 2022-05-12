import { hasLand } from '../interfaces/hasLand';
import { Aviary } from './Aviary';

export class SnakeAviary extends Aviary implements hasLand {
  airTemperature: number;
  landWidth: number;
  landLength: number;

  constructor(
    height: number = 1,
    airTemperature: number,
    landWidth: number,
    landLength: number
  ) {
    super(height);
    this.airTemperature = 30;
    this.landWidth = 2;
    this.landLength = 2;
  }

  getEffectiveSquare = () => {
    return this.landWidth * this.landLength;
  };
}

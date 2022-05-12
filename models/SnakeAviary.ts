import { hasLand } from '../interfaces/hasLand';
import { Aviary } from './Aviary';

export class SnakeAviary extends Aviary implements hasLand {
  airTemperature: number;
  landWidth: number;
  landLength: number;

  getEffectiveSquare = () => {
    return 1;
  };
}

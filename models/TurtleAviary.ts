import { hasLake } from '../interfaces/hasLake';
import { Aviary } from './Aviary';

export class TurtleAviary extends Aviary implements hasLake {
  waterTemperature: number;
  lakeWidth: number;
  lakeLength: number;

  getEffectiveSquare = () => {
    return 1;
  };
}

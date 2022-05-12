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

  getEffectiveSquare = () => {
    return 1;
  };
}

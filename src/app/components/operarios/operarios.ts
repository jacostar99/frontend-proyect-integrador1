import { Region } from './region';
import {Mantenimiento} from '../mantenimientos/models/mantenimiento';


export class Operarios {

  id:number;
  nombre:string;
  apellido:string;
  estado:string;
  horaFinTurno:string;
  fechaCreacion:string;
  foto:string;
  region:Region;
  mantenimientos: Mantenimiento[]=[];
  username:string;
  password:string;
  enabled:string;
  roles:string[]=[];

}

import { Observable } from 'rxjs';
import { Rol } from 'app/models/rol';

export interface IRolService  {

    FindRol(name: String):Observable<Rol>;
}
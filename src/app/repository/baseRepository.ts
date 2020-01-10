import { Observable } from 'rxjs';

export interface BaseRespository<T>{
    get(id: Number):Observable<T>;
    getAll():Observable<Array<T>>;
    add(entity:T): Observable<T>;
    update(entity:T):Observable<T>;
    delete(id: Number):Observable<T>;
}
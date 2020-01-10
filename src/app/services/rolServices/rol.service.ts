import { Injectable, OnInit } from '@angular/core';
import { BaseRespository } from 'app/repository/baseRepository';
import { Rol } from 'app/models/rol';
import { Observable } from 'rxjs';
import { IRolService } from './Irol-Services';
import { ApiService } from '../apiServices/api.service';


const routes = {
  AddRol: 'rol/AddRol',
  GetRol: 'rol/GetRol/',
  DeleteRol: 'rol/DeleteRol/',
  Update: 'rol/EditRol',
  GetAll: 'rol/GetAllRol'

}

@Injectable({
  providedIn: 'root'
})

export class RolService implements BaseRespository<Rol>, IRolService {

  constructor(private _apiService:ApiService) { 

  }

  FindRol(name: String): Observable<Rol> {
    throw new Error("Method not implemented.");
  }
  get(id: Number): Observable<Rol> {
    var result = this._apiService.get(routes.GetRol+id);
    return result;
  }
  getAll(): Observable<Rol[]> {
    var result = this._apiService.get(routes.GetAll);
    return result;
  }
  add(entity: Rol): Observable<Rol> {
    var result =  this._apiService.post(routes.AddRol, entity);
    return result;
  }
  update(entity: Rol): Observable<Rol> {
    var result = this._apiService.put(routes.Update, entity);
    return result;
  }
  delete(id: Number): Observable<Rol> {
    var result = this._apiService.delete(routes.DeleteRol+id);
    return result;
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  
}

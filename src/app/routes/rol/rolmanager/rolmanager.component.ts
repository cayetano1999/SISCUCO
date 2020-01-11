import { Component, OnInit } from '@angular/core';
import { RolService } from 'app/services/rolServices/rol.service';
import { BaseRespository } from 'app/repository/baseRepository';
import { Rol } from 'app/models/rol';
import { Observable } from 'rxjs';
import { NotificationService } from 'app/services/notification.service';





export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

const ROLES: Rol[] = [
{idRol:1, name:'Test', estado:'Activo', creationDate: new Date}
];

@Component({
  selector: 'app-rol-rolmanager',
  templateUrl: './rolmanager.component.html',
  styleUrls: ['./rolmanager.component.scss']
})

export class RolRolmanagerComponent implements OnInit {

  test= "ok";
  loading: boolean = true;
  rolItems: Array<Rol>;
  displayedColumns: string[];
  datasource: Rol[];
  ngOnInit(): void {
    this.getAll()
    
  }
  constructor(private _rolService:RolService, private _notificationService: NotificationService) {
    this.displayedColumns = ['idRol', 'name', 'estado', 'creationDate', 'actions'];
     this.datasource = this.rolItems;
  }
  // get(id: Number): Observable<Rol> {
  //   throw new Error("Method not implemented.");
  // }
  getAll() {
    this.loading= true;
    this._rolService.getAll().subscribe(data=>{
      if(data.length>0){
        this.datasource = data;
        console.log(this.rolItems);
      }
      this.loading = false;
      this._notificationService.show("Roles", "Roles Cargados", "success");

      return data;
    }),error=>{
      this.loading = false;
      console.log("Ha ocurrido un error al cargar los roles: "+error);
      this._notificationService.show("Roles", "Ha ocrrido un error.", "error");
    };
  }
  // add(entity: Rol): Observable<Rol> {
  //   throw new Error("Method not implemented.");
  // }
  // update(entity: Rol): Observable<Rol> {
  //   throw new Error("Method not implemented.");
  // }
  // delete(id: Number): Observable<Rol> {
  //   throw new Error("Method not implemented.");
  // }

  getCountRol(){
    var count = this.datasource.length;
    return count;
  }
  
  

  
}

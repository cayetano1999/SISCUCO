import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '@core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
})
export class SidemenuComponent implements OnInit {

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  // NOTE: Ripple effect make page flashing on mobile
  @Input() ripple = false;

  menus = this.menuService.getAll();

  constructor(private menuService: MenuService, private route: Router) {
  }

  // Delete empty value in array
  filterStates(states: string[]) {
    return states.filter(item => item && item.trim());
  }
  redirectToPath(path: string, home: string){
    debugger;
    this.route.navigate([path+'/'+home]);
  }
}

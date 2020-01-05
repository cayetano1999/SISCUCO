import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounts-manageaccount',
  templateUrl: './manageaccount.component.html',
  styleUrls: ['./manageaccount.component.scss']
})
export class AccountsManageaccountComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }
  constructor(private router: Router) {
    
  }

  gooOut(){
    debugger;
    this.router.navigate(['/accounttypes'])
  }
}

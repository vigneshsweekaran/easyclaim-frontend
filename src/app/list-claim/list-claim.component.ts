import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../model/user.model";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-list-claim',
  templateUrl: './list-claim.component.html',
  styleUrls: ['./list-claim.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListClaimComponent implements OnInit {

  claims: User[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if(!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.apiService.getClaims()
      .subscribe( data => {
          this.claims = data.result;
      });
  }

  deleteClaim(claim: User): void {
    this.apiService.deleteClaim(claim.id)
      .subscribe( data => {
        this.claims = this.claims.filter(u => u !== claim);
      })
  };

  editClaim(claim: User): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", claim.id.toString());
    this.router.navigate(['edit-claim']);
  };

  addClaim(): void {
    this.router.navigate(['add-claim']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}

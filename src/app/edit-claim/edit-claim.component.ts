import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../model/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-edit-claim',
  templateUrl: './edit-claim.component.html',
  styleUrls: ['./edit-claim.component.css']
})
export class EditClaimComponent implements OnInit {

  claim: User;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let claimId = window.localStorage.getItem("editUserId");
    if(!claimId) {
      alert("Invalid action.")
      this.router.navigate(['list-claim']);
      return;
    }
    this.editForm = this.formBuilder.group({
      id: [''],
      category: ['', Validators.required],
      billDate: ['', Validators.required],
      billNo: ['', Validators.required],
      claimAmount: ['', Validators.required]
    });
    this.apiService.getClaimById(+claimId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  onSubmit() {
    this.apiService.updateClaim(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if(data.status === 200) {
            alert('Claim updated successfully.');
            this.router.navigate(['list-claim']);
          }else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      category: ['', Validators.required],
      billDate: ['', Validators.required],
      billNo: ['', Validators.required],
      claimAmount: ['', Validators.required]
    });

  }

  onSubmit() {
    this.apiService.createClaim(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['list-claim']);
      });
  }

}

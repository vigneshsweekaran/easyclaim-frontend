import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUserComponent} from "./list-user/list-user.component";
import {EditUserComponent} from "./edit-user/edit-user.component";
import {AddClaimComponent} from "./add-claim/add-claim.component";
import {ListClaimComponent} from "./list-claim/list-claim.component";
import {EditClaimComponent} from "./edit-claim/edit-claim.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'add-claim', component: AddClaimComponent },
  { path: 'list-claim', component: ListClaimComponent},
  { path: 'edit-claim', component: EditClaimComponent},
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import {ApiService} from "./core/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import {TokenInterceptor} from "./core/interceptor";
import { ListClaimComponent } from './list-claim/list-claim.component';
import { AddClaimComponent } from './add-claim/add-claim.component';
import { EditClaimComponent } from './edit-claim/edit-claim.component';
import { ConfigService } from './core/config.service';

export function initConfig(config: ConfigService) {
  return () => config.loadConfig();
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    ListUserComponent,
    ListClaimComponent,
    AddClaimComponent,
    EditClaimComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}, {
    provide: APP_INITIALIZER,
    useFactory: initConfig,
    deps: [ConfigService],
    multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

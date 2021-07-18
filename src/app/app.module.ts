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
import { AuthService } from './core/auth.service';

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
  providers: [{
    provide: APP_INITIALIZER,
    multi: true,
    deps: [ConfigService, AuthService],
    useFactory: (
      configSvc: ConfigService,
      settingsService: AuthService
    ) => {
      return () => {
        return configSvc.loadConfig().then(config => {
          return settingsService.loadConfig(config);
        });
      };
    }
  }, ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true},],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  authConfig: any;
  async loadConfig(config: any) {
    this.authConfig = config.authConfig;
    return this.authConfig;
  }
  get getBackendUrl(): string {
    if (!this.authConfig) {
      console.error("config could not be loaded from app config servcie.");
    }
    return this.authConfig.backendUrl;
  }
}

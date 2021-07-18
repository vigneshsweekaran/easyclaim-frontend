import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ConfigService {
  configData: any;

  constructor(private httpClient: HttpClient) {}

  async loadConfig() {
    const data = await this.httpClient
      .get<any>("./assets/config.json")
      .toPromise();
    this.configData = data;
    console.log(this.configData);
    return data;
  }

  get config(): string {
    if (!this.configData) {
      console.error("config could not be loaded from app config service.");
    }
    return this.configData;
  }
}
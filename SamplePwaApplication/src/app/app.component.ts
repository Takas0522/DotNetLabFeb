import { Component, ChangeDetectorRef, Output } from '@angular/core';
import { Client, ReturnDataModel } from './http-client/client';
import { UpdateService } from './services/update-service';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SamplePwaApplication';
  outputData: ReturnDataModel[];

  constructor(
    private client: Client,
    private cd: ChangeDetectorRef,
    private httpClient: HttpClient,
    private updateService: UpdateService
  ) {}

  getData() {
    this.httpClient.get<ReturnDataModel[]>('https://201801-dotnetlab-demo-api.azurewebsites.net/api/BigSizeData').subscribe(d => {
      const sd = d.slice(0, 10);
      this.outputData = sd;
      this.cd.detectChanges();
    });
  }
}

import { Component, ChangeDetectorRef, Output } from '@angular/core';
import { Client, ReturnDataModel } from './http-client/client';
import { UpdateService } from './services/update-service';
import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/typings/scroll/scroll-strategy';

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
    private updateService: UpdateService
  ) {}

  getData() {
    this.client.getBigSizeData().subscribe(data => {
      const sd = data.slice(0, 10);
      this.outputData = sd;
      this.cd.detectChanges();
    });
  }
}

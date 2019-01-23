import { Component, ChangeDetectorRef } from '@angular/core';
import { Client, ReturnDataModel } from './http-client/client';

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
    private cd: ChangeDetectorRef
  ) {}

  getData() {
    this.client.getBigSizeData().subscribe(data => {
      const sd = data.slice(0, 10);
      this.outputData = sd;
      this.cd.detectChanges();
    });
  }
}

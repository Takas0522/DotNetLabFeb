import { Component } from '@angular/core';
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
    private client: Client
  ) {}

  getData() {
    this.client.getBigSizeData().subscribe(data => {
      this.outputData = data;
    });
  }
}

import { Component } from '@angular/core';
import { HelloWorldService } from 'projects/tools/src/public-api';
import { testDatasetInfo } from './_mocked';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  progressData = testDatasetInfo;
}

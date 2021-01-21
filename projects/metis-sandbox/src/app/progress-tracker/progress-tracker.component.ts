//import { Component, Input, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DatasetInfo, ProgressByStep, PercentageClassInfo } from '../_models';
import { testDatasetInfo } from '../_mocked';

@Component({
  selector: 'app-progress-tracker',
  templateUrl: './progress-tracker.component.html',
  styleUrls: ['./progress-tracker.component.scss']
})
export class ProgressTrackerComponent implements OnInit {
  //@Input() progressData: DatasetInfo;
  progressData = testDatasetInfo;
  ngOnInit(): void {}

  getPct(item: ProgressByStep): number {
    return (item.total / this.progressData['total-records']) * 100;
  }

  getFlexBasis(item: ProgressByStep, data: DatasetInfo, normalise: boolean): number {
    let divideBy = normalise
      ? data['progress-by-step']
          .map((pbs: ProgressByStep) => {
            return pbs.total;
          })
          .reduce((a, b) => a + b, 0)
      : data['progress-by-step'].length * data['total-records'];
    return (item.total / divideBy) * 100;
  }

  getProgressByStepPercentages(info: ProgressByStep): Array<PercentageClassInfo> {
    return ['success', 'fail', 'warn'].map((s: string) => {
      return {
        className: s,
        pct: (info[s] / info.total) * 100
      };
    });
  }
}

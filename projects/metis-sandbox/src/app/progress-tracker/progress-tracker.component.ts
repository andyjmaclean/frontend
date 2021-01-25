import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DatasetInfo, ProgressByStep, PercentageClassInfo } from '../_models';
import { testDatasetInfo } from '../_mocked';

@Component({
  selector: 'sb-progress-tracker',
  templateUrl: './progress-tracker.component.html',
  styleUrls: ['./progress-tracker.component.scss']
})
export class ProgressTrackerComponent implements OnInit {
  @Input() showCtrls: boolean;
  progressData = testDatasetInfo.slice(0, 1);
  formCtrls: FormGroup;

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.formCtrls = this.fb.group({
      plain: [''],
      labels: [''],
      stack: [''],
      normalise: [''],
      totals: [''],
      ticks: ['']
    });
  }

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

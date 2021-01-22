import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataPollingComponent } from 'projects/tools/src/public-api';
import { SubmissionResponseData } from '../_models';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent extends DataPollingComponent {
  formUpload: FormGroup;
  fileFormName = 'dataset';
  countries = ['Greece', 'Hungary', 'Italy'];
  languages = [
    {
      code: 'el',
      name: 'Greek'
    },
    {
      code: 'hu',
      name: 'Hungarian'
    },
    {
      code: 'it',
      name: 'Italian'
    }
  ];

  step = 0;
  trackId: number;
  fieldConf = [
    {
      title: 'name',
      instruction: 'Type a Name',
      fields: [
        {
          name: 'name',
          type: 'text',
          validators: [
            Validators.required,
            (control: FormControl): { [key: string]: boolean } | null => {
              const val = control.value;
              console.log('test for andy = ' + val);
              if (val !== 'andy') {
                return { custom: true };
              }
              return null;
            }
          ]
        }
      ]
    },
    {
      title: 'country_language',
      instruction: 'Select the Country and Language',
      fields: [
        {
          name: 'country',
          type: 'optioned',
          options: this.countries,
          validators: [Validators.required]
        },
        {
          name: 'language',
          options: this.languages,
          type: 'optioned',
          validators: [Validators.required]
        }
      ]
    },
    {
      title: 'dataset',
      instruction: 'Configure the data source',
      fields: [{ name: 'dataset', type: 'file', validators: [Validators.required] }]
    },
    {
      title: 'progress',
      instruction: 'Show the progress here'
    }
  ];

  constructor(private readonly http: HttpClient, private readonly fb: FormBuilder) {
    super();

    this.formUpload = this.fb.group(
      this.fieldConf
        .filter((conf) => {
          return !!conf.fields;
        })
        .reduce((map, conf: any) => {
          let test = conf.fields.reduce((map, f: any) => {
            let entry = [''];
            if (f.validators) {
              entry.push(f.validators);
            }
            map[f.name] = entry;
            return map;
          }, {});
          return Object.assign(map, test);
        }, {})
    );
  }

  getOrbTooltip(field: string): string {
    const val = this.formUpload.value[field];
    const sVal = typeof val === 'object' ? val.name : val;
    return val ? `${field}: ${sVal}` : '';
  }

  setStep(step: number): void {
    this.step = step;
  }

  /** onSubmitFormFile
  /* - submit the formFile form data if validation has passed
  */
  onSubmitFormFile(): void {
    const form = this.formUpload;
    if (form.valid) {
      //this.isSaving = true;
      this.subs.push(
        this.setFormFile(form.get(this.fileFormName)!.value).subscribe(
          (res: SubmissionResponseData) => {
            if (res.body) {
              const trackId = res.body['dataset-id'];
              this.trackId = trackId;
              console.log('Start following progress of ' + trackId);
            }
          },
          (err: HttpErrorResponse): void => {
            console.log(err);
          }
        )
      );
    }
  }

  stepIsComplete(step: number): boolean {
    if (!this.fieldConf[step].fields) {
      return !!this.trackId;
    }
    return !this.fieldConf[step].fields.find((f: any) => {
      let ctrl = this.formUpload.get(f.name);
      return !ctrl.valid;
    });
  }

  /** setPublicationFile
  /*  attach file to form and post
  /*  @param {string} datasetId - the dataset id
  /*  @param {File} file - file of record urls
  */
  setFormFile(file: File): Observable<SubmissionResponseData> {
    const country = this.formUpload.value.country;
    const language = this.formUpload.value.language;
    const datasetName = this.formUpload.value.name;

    //const apiHost = 'https://metis-sandbox.eanadev.org/metis-sandbox-rest-production/';
    const apiHost = 'http://test-metis-storage.eanadev.org:8080/metis-sandbox-rest-test/';
    const url = `${apiHost}dataset/${datasetName}/process?country=${country}&language=${language}`.replace(
      /\/\/proc/,
      '/proc'
    );

    const formData = new FormData();
    formData.append(this.fileFormName, file);

    return this.http.post<SubmissionResponseData>(url, formData, {
      observe: 'events',
      params: {
        clientFilename: file.name,
        mimeType: file.type
      },
      reportProgress: true
    }) as Observable<SubmissionResponseData>;
  }
}

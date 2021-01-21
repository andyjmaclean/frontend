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

  constructor(private readonly http: HttpClient, private readonly fb: FormBuilder) {
    super();
    this.formUpload = this.fb.group({
      country: ['', [Validators.required]],
      dataset: ['', [Validators.required, this.validateFileExtension]],
      language: ['', [Validators.required]],
      name: ['', [Validators.required]]
    });
  }

  getFullStatus(field: string): string {
    const val = this.formUpload.value[field];
    const sVal = typeof val === 'object' ? val.name : val;
    return val ? sVal : '';
  }

  setStep(step: number): void {
    this.step = step;
  }

  /** TODO: move this copied code to shared/[_validators]
   */
  validateFileExtension(control: FormControl): { [key: string]: boolean } | null {
    const splitVal = (control.value ? control.value.name : '').split('.');
    if (splitVal.length > 1 && splitVal[1].toLowerCase() !== 'zip') {
      return { extension: true };
    }
    return null;
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

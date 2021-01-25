import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { HttpClient, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataPollingComponent } from 'projects/tools/src/public-api';
import { SubmissionResponseData, WizardStep } from '../_models';

@Component({
  selector: 'sb-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent extends DataPollingComponent {
  formUpload: FormGroup;
  @Input() fileFormName: string;

  wizardConf: Array<WizardStep>;

  @Input() set _wizardConf(wizardConf: Array<WizardStep>) {
    this.wizardConf = wizardConf;
    this.step = this.wizardConf.length - 1;
    this.buildForm();
  }

  orbsHidden = true;
  orbsSquare = false;
  step: number;
  trackId: number;

  constructor(private readonly http: HttpClient, private readonly fb: FormBuilder) {
    super();
  }

  buildForm(): void {
    this.formUpload = this.fb.group(
      this.wizardConf
        .filter((conf) => {
          return !!conf.fields;
        })
        .reduce((map, conf: any) => {
          let test = conf.fields
            .filter((map) => !!map.name)
            .reduce((map, f: any) => {
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
    this.orbsHidden = false;
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

    if (this.wizardConf[step].title==='progress') {
      return !!this.trackId;
    }
    return !this.wizardConf[step].fields
      .filter((f: {name: string}) => !!f.name)
      .find((f: {name: string}) => {
        return !this.formUpload.get(f.name).valid;
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

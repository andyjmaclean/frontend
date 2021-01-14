import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DataPollingComponent, HelloWorldService } from 'projects/tools/src/public-api';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends DataPollingComponent {
  title = 'administration';
  formUpload: FormGroup;
  //fileFormName = 'uploadFile';
  fileFormName = 'filename'

  constructor(
    private readonly http: HttpClient,
    helloWorld: HelloWorldService,
    private readonly fb: FormBuilder
  ) {
      super();
      this.title = 'M-Ui: ' + helloWorld.message;

      this.formUpload = this.fb.group({
        filename: ['', [Validators.required, this.validateFileExtension]]
      });
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
  /* - trigger a reload of the displayed depublication data
  */
  onSubmitFormFile(): void {
    console.log('submit whole thing');
    const form = this.formUpload;
    if (form.valid) {
      //this.isSaving = true;
      this.subs.push(
        //this.depublications
        this
          .setFormFile('', this.fileFormName, form.get(this.fileFormName)!.value)
          //.setFormFile(this._datasetId, form.get('depublicationFile')!.value)
          .subscribe(
            () => {
              console.log('success');
              //this.refreshPolling();
              //this.closeDialogs();
              //this.isSaving = false;
            },
            (err: HttpErrorResponse): void => {
              console.log(err);
              //this.onError(err);
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
  setFormFile(datasetName: string, formName: string, file: File): Observable<boolean> {

    const country = 'Netherlands';
    const language = 'nl';
    const name = 'test-name-andy-' + (new Date().getTime());
    const apiHost = 'https://metis-sandbox.eanadev.org/metis-sandbox-rest-production/';
    const url = `${apiHost}dataset/${datasetName}/process?country=${country}&language=${language}`;

    const formData = new FormData();

    formData.append(formName, file);

    return this.http
      .post(url, formData, {
        observe: 'events',
        params: {
          clientFilename: file.name,
          mimeType: file.type
        },
        reportProgress: true
      })
      .pipe(map((res)=> {
        console.log('res ' + res)
        return true;
      }));

      //.pipe(this.errors.handleRetry());
  }

}

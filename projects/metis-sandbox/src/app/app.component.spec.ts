import { forwardRef } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, /*NG_VALUE_ACCESSOR*/ } from '@angular/forms';

import { FileUploadComponent } from 'projects/tools/src/public-api';



import {
  HttpClientTestingModule
} from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        //FileUploadComponent,
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        FileUploadComponent
      ],
      /*
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          //useExisting: FileUploadComponent,
          useExisting: forwardRef(() => FileUploadComponent),
          multi: true
        }
      ]
      */
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'm-ui'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('M-Ui: Hello World!');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('app is running!');
  });
});

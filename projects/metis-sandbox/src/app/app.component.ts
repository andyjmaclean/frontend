import { Component } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';

import { HelloWorldService } from 'projects/tools/src/public-api';
import { testDatasetInfo } from './_mocked';
import { WizardStep } from './_models';

@Component({
  selector: 'sb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  progressData = testDatasetInfo;

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

  wizardConf = [
    {
      title: 'name',
      instruction: 'Enter a Dataset Name',
      fields: [
        {
          name: 'name',
          label: 'Name',
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
      instruction: 'Enter the Details', //'Select the Country and Language',
      fields: [
        {
          name: 'country',
          label: 'Country',
          type: 'select',
          options: this.countries,
          validators: [Validators.required]
        },
        {
          name: 'language',
          label: 'Language',
          options: this.languages,
          type: 'select',
          validators: [Validators.required]
        }
      ]
    },
    {
      title: 'harvest',
      instruction: 'Configure the Data Source',
      fields: [
        {
          name: 'pluginType',
          validators: [Validators.required]
        },
        {
          name: 'harvestUrl'
        },
        {
          name: 'setSpec'
        },
        {
          name: 'metadataFormat'
        },
        {
          name: 'url'
        },
        {
          name: this.fileFormName
        }
      ]
    },
    {
      title: 'progress',
      instruction: 'Track Data Processing',
      fields: [{ name: 'idToTrack' }]
    }
  ] as Array<WizardStep>;
}

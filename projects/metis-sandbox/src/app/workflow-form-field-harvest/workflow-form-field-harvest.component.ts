import { Component, Input } from '@angular/core';
//import { FormGroup } from '@angular/forms';

//import { PluginType, WorkflowFieldDataParameterised } from '../../../_models';
//import { TranslateService } from '../../../_translate';

@Component({
  selector: 'app-workflow-form-field-harvest',
  templateUrl: './workflow-form-field-harvest.component.html',
  styleUrls: ['./workflow-form-field-harvest.component.scss']
})
export class WorkflowFormFieldHarvestComponent {
  @Input() protocol: string;
}

import { Component, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';

// TODO: from helpers

/** harvestValidator
/* checks the validity of the control value
*/
export function harvestValidator(control: AbstractControl): ValidationErrors | null {
  if (control.value.indexOf('?') >= 0) {
    return { validParameter: true };
  }

  const regex = /(http(s?))\:\/\//g;
  if (!regex.test(control.value)) {
    return { validUrl: true };
  }
  return null;
}

@Component({
  selector: 'sb-workflow-form-field-harvest',
  templateUrl: './workflow-form-field-harvest.component.html',
  styleUrls: ['./workflow-form-field-harvest.component.scss']
})
export class WorkflowFormFieldHarvestComponent {
  @Input() fileFormName: string;
  form: FormGroup;

  @Input() set _form(form: FormGroup) {
    this.form = form;
    this.updateRequired();
  }

  /** isProtocolHTTP
  /* return true if protocol is http
  */
  isProtocolHTTP(): boolean {
    return this.form!.value.pluginType === 'HTTP_HARVEST'; //PluginType.HTTP_HARVEST;
  }

  isProtocolOAIPMH(): boolean {
    return this.form!.value.pluginType === 'OAIPMH_HARVEST';
  }

  isProtocolFile(): boolean {
    return this.form!.value.pluginType === 'FILE';
  }

  updateValidities(fields: Array<string>): void {
    fields.forEach((s: string) => {
      this.form.get(s)!.updateValueAndValidity({ onlySelf: false, emitEvent: false });
    });
  }

  clearValidators(): void {
    ['harvestUrl', 'metadataFormat', 'url', this.fileFormName].forEach((s: string) => {
      this.form.get(s)!.setValidators(null);
      this.form.get(s)!.updateValueAndValidity({ onlySelf: false, emitEvent: false });
    });
  }

  // TODO from workflow.component (tidied and localised)

  /** updateRequired
  /* update required fields depending on selection
  */
  updateRequired(): void {
    this.form.valueChanges.subscribe(() => {
      this.clearValidators();
      if (this.form.get('pluginType')!.value === 'FILE') {
        this.form.get(this.fileFormName)!.setValidators([Validators.required]);
        this.updateValidities([this.fileFormName]);
      } else if (this.form.get('pluginType')!.value === 'OAIPMH_HARVEST') {
        this.form.get('harvestUrl')!.setValidators([Validators.required, harvestValidator]);
        this.form.get('metadataFormat')!.setValidators([Validators.required]);
        this.updateValidities(['harvestUrl', 'metadataFormat']);
      } else if (this.form.get('pluginType')!.value === 'HTTP_HARVEST') {
        this.form.get('url')!.setValidators([Validators.required, harvestValidator]);
        this.updateValidities(['url']);
      }
    });
  }
}

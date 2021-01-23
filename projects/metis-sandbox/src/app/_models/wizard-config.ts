export enum WizardFieldType {
  select = 'select',
  text = 'text',
  progress = 'progress',
  harvest = 'harvest'
}

export interface WizardField {
  name: string;
  label?: string;
  type?: WizardFieldType;
  validators?: Array<any>;
  options?: Array<any>;
}

export interface WizardStep {
  title: string;
  instruction: string;
  fields?: Array<WizardField>;
}

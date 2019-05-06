import { BaseField } from './base-field';

export class Textfield extends BaseField<string> {
  controlType = 'textfield';
  type: string;

  constructor(options: {
    type?: string,
    value?: string,
    label?: string,
    key?: string,
    required?: boolean,
    controlType?: string
  } = {}) {
    super(options);
    this.type = options.type || '';
  }
}
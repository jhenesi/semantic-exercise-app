import { BaseField } from './base-field';

export class Textfield extends BaseField<string> {
  maxLength?: number;
  controlType = 'textfield';
  type?: string;

  constructor(options: {
    maxLength?: number,
    type?: string,
    value?: string,
    label?: string,
    key?: string,
    required?: boolean,
    controlType?: string
  } = {}) {
    super(options);
    this.maxLength = options.maxLength;
    this.type = options.type || '';
  }
}
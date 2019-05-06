import { BaseField } from './base-field';

export class Dropdown extends BaseField<string> {
  controlType = 'dropdown';
  options: { key: string, value: string }[] = [];

  constructor(options: {
    options?: { key: string, value: string }[],
    value?: string,
    label?: string,
    key?: string,
    required?: boolean,
    controlType?: string
  } = {}) {
    super(options);
    this.options = options.options || [];
  }
}
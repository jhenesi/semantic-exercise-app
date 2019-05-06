export class BaseField<T> {
  value: T;
  label: string;
  key: string;
  required: boolean;
  controlType: string;

  constructor(options: {
    value?: T,
    label?: string,
    key?: string,
    required?: boolean,
    controlType?: string
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.controlType = options.controlType || '';
  }
}

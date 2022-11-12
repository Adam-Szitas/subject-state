import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormDataState } from '../interfaces/states/form.interface';

@Component({
  selector: 'output-component',
  templateUrl: './output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputComponent{
  @Input()
  public formValue: FormDataState | null = null;
}

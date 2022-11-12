import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormDataState } from '../states/form.state.service';

@Component({
  selector: 'output-component',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OutputComponent{
  @Input()
  public formValue: FormDataState | null = null;
}

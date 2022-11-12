import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormDataState, FormService } from './states/form.state.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    title = 'Subject State Team POS';

    constructor(private formStateService: FormService) {}

    public form: Observable<FormDataState | null> = of(null);

    public ngOnInit(): void {
        this.formStateService.form$.subscribe((form) => (this.form = of(form)));
    }
}

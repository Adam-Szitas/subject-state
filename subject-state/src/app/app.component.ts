import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FormDataState } from './interfaces/states/form.interface';
import { StateFacadeService } from './services/facade/state-facade.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    title = 'Subject State Team POS';

    constructor(private stateFacade: StateFacadeService) {}

    public form: Observable<FormDataState | null> = of(null);

    public ngOnInit(): void {
        this.stateFacade.state.form.subscribe((form: FormDataState | null) => this.form = of(form))
    }
}

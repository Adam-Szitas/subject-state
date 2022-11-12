import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FormState, FormDataState } from '../interfaces/states/form.interface';
import { StateService } from './state.service';

@Injectable({
    providedIn: 'root',
})
export class FormService extends StateService<FormState> {
    constructor() {
        super(initialState);
    }

    public form$: Observable<FormDataState | null> = this.select((state) => state.forms).pipe(map((form) => form[form.length - 1])) ?? null;

    addForm(newForm: FormDataState) {
        this.setState({ forms: [...this.state.forms, newForm] });
    }

    selectForm(form: FormState) {
        this.setState({ formId: form.formId });
    }
}

const initialState: FormState = {
    forms: [],
    formId: 0,
};
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormService } from '../states/form.state.service';

@Component({
    selector: 'form-component',
    template: `
        <div>
            <form (ngSubmit)="submitForm()" [formGroup]="inputForm">
                <div class="fields">
                    <label for="firstName">First name: </label>
                    <input type="text" name="firstName" formControlName="firstName" />
                </div>
                <div class="fields">
                    <label for="lastName">Last name</label>
                    <input type="text" name="lastName" formControlName="lastName" />
                </div>
                <div class="fields">
                    <label for="age">Age</label>
                    <input type="number" name="age" formControlName="age" />
                </div>
                <button>Submit</button>
            </form>
        </div>
    `,
})
export class FormComponent implements OnInit {
    constructor(private formStateService: FormService) {}
    public inputForm: FormGroup = new FormGroup({});

    public submitForm() {
        if (this.inputForm.invalid) return;
        const formValue = this.inputForm.getRawValue();
        this.formStateService.addForm({
            firstName: formValue.firstName,
            lastName: formValue.lastName,
            age: formValue.age,
        });
    }

    ngOnInit(): void {
        this.inputForm = new FormGroup({
            firstName: new FormControl<string>(''),
            lastName: new FormControl<string>(''),
            age: new FormControl<string | null>(null),
        });
    }
}

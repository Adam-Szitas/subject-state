import { Injectable } from "@angular/core";
import { FormService } from "src/app/states/form.state.service";


@Injectable({
    providedIn: 'root'
})
export class StateFacadeService{
    constructor(private formState: FormService){}
    public get state() {
        return {
            form: this.formState.form$
            
        }
    }
}
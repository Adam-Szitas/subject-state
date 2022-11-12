export interface FormState {
    forms: FormDataState[];
    formId: number;
}

export interface FormDataState {
    firstName: string;
    lastName: string;
    age: number;
}

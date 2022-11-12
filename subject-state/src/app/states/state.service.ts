import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class StateService<T> {
    constructor(initialState: Object) {
        this.state$ = new BehaviorSubject<T>(<T>initialState);
    }

    private state$: BehaviorSubject<T>;
    protected get state(): T {
        return this.state$.getValue();
    }

    protected select<K>(mapFn: (state: T) => K): Observable<K> {
        return this.state$.asObservable().pipe(
            map((state: T) => mapFn(state)),
            distinctUntilChanged()
        );
    }

    protected setState(newState: Partial<T>) {
        this.state$.next({
            ...this.state,
            ...newState,
        });
    }
}

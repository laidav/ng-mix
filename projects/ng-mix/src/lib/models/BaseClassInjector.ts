import { Injectable, Injector } from "@angular/core";

@Injectable({
	providedIn: 'root'
})
export class BaseClassInjector {
	ngOnInit () {};
	constructor(public injector: Injector) {}
}
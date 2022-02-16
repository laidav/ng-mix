import { Injectable, Injector } from "@angular/core";

@Injectable({
	providedIn: 'root'
})
export abstract class BaseClassInjector {
	ngOnInit () {};
	constructor(public injector: Injector) {}
}
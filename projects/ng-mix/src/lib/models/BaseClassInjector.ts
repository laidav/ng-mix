import { Injectable, Injector } from "@angular/core";

@Injectable({
	providedIn: 'root'
})
export class BaseClassInjector {
	constructor(public injector: Injector) {}
}
# NgMix

Lightweight Angular schematic library for generating typescript mixins designed for Angular Components.

Typescript mixins are used to implement a composition pattern to share common logic across Angular components.

## Table of Contents
1. [Installation](#installation)
1. [Usage](#usage)
	1. [CLI Command](#cli-command)
	1. [Mixin Overview](#mixin-overview)
	1. [Usage with Component & Lifecycle Hooks](#component-usage)
	1. [Composing with Mixins](#compose-mixins)
	1. [@Input and @Outputs Decorators](#input-output)
	1. [Services](#services)


## Installation <a name="installation"></a>

Install via npm:

```
npm i ng-mix
```

## Usage <a name="usage"></a>

<b>CLI Command</b> <a name="cli-command"></a>
- To create a mixin run the following command
	```
	ng g ng-mix:mixin
	```
- You will be prompted to give your mixin a name

<b>Mixin Overview</b> <a name="mixin-overview"></a>
- The following code will be generated (sample.mixin.ts)
	```typescript
	import { Injectable, OnInit } from '@angular/core';
	import { BaseClassInjector } from 'ng-mix';

	export const SampleMixin = (superClass = BaseClassInjector) => {

	  @Injectable()
	  class Sample extends superClass implements OnInit {
		
	    // You can inject services from the BaseClassInjector i.e
	    // myService = this.injector.get(MyService);

	    ngOnInit(): void {
	      //Call super's lifecycle method
	      super.ngOnInit();

	      //Implementation here
	    }		
	  }

	  return Sample;
	}
	```
- All mixins will inherit [BaseClassInjector](https://github.com/laidav/ng-mix/blob/master/projects/ng-mix/src/lib/models/BaseClassInjector.ts)

<b>Usage with Component & Lifecycle Hooks</b><a name="component-usage"></a>

```typescript
import { Component, OnInit, Injector } from '@angular/core';
import { SampleMixin } from './sample.mixin';

@Component({
  selector: 'app-component',
  templateUrl: './app-component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends SampleMixin() implements OnInit {
  
  constructor(public injector: Injector) {
    //Provides injector to the mixin(s) to access Angular Services via DI
    super(injector);
  }

  ngOnInit(): void {
    //Make sure you call super's lifecycle hook methods to invoke the methods on the mixins
    super.ngOnInit();
  }

}
```

- Extend your component class with the mixin

- Provide the injector to the mixins by passing it into the super call in the constructor.

- All component lifecycle methods are available in the mixin. When implementing any lifecycle method in a component or mixin, ensure to call super.{lifecycleMethod} to ensure all life cycle methods are invoked


<b>Composing with Mixins</b><a name="compose-mixins"></a>

- You can mix mixins together as shown
	```typescript
	export class AppComponent extends SampleOneMixin(SampleTwoMixin())
	```

- You can also use the `composeMixins` helper function
	```typescript
	import { composeMixins } from 'ng-mix';

	const Mixins = composeMixins(SampleOneMixin, SampleTwoMixin);

	@Component({
	  ...
	})
	export class AppComponent extends Mixins
	```

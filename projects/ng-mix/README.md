# NgMix

Angular schematic library for generating typescript mixins designed for Angular Components.

Typescript mixins are then used to implement a composition pattern to share common logic across Angular components.

## Table of Contents <a name="table-of-contents"></a>
1. [Requirements](#requirements)
1. [Installation](#installation)
1. [Usage](#usage)
	1. [CLI Command](#cli-command)
	1. [Mixin Overview](#mixin-overview)
	1. [Usage with Component](#component-usage)
	1. [Composing with Mixins](#compose-mixins)
	1. [Angular Lifecycle Hooks](#lifecycle-hooks)
	1. [Angular @Input and @Outputs Decorators](#input-output)
	1. [Angular Services](#services)

## Requirements <a name="requirements"></a>

- Angular 8 or higher

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
  import { BaseInjectorConstructor } from 'ng-mix';

  export const SampleMixin = <Tbase extends BaseInjectorConstructor>(superClass: Tbase) => {

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

[Back to top](#table-of-contents)

<br>

<b>Usage with Component</b><a name="component-usage"></a>

- Extend your component class with the mixin.

```typescript
import { Component, Injector } from '@angular/core';
import { SampleMixin } from './sample.mixin';
import { Base } from 'ng-mix';

@Component({
  selector: 'app-component',
  templateUrl: './app-component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends SampleMixin(Base) {
  
  constructor(public injector: Injector) {
    //Provides injector to the mixin(s) for access to Angular Services via DI
    super(injector);
  }
}
```


- Provide ng-mix's Base class to the mixin.
- Provide the injector to the mixin(s) by passing it into the super call in the constructor.

[Back to top](#table-of-contents)

<br>

<b>Composing with Mixins</b><a name="compose-mixins"></a>

- You can mix mixins together as shown
	```typescript
  const Mixins = SampleOneMixin(SampleTwoMixin(Base));
  export class AppComponent extends Mixins {
    ...
  };
	```

[Back to top](#table-of-contents)

<br>

<b>Angular Lifecycle Hooks</b><a name="lifecycle-hooks"></a>

- When implementing an Angular lifecycle hook method on the mixin or component using mixin(s), <b>always call super.[ lifecycle method]</b> when mixins are used to ensure the lifecycle methods for all mixins are invoked.

	```typescript
	//sample.mixin.ts

	export const SampleMixin = <Tbase extends BaseInjectorConstructor>(superClass: Tbase) => {

	  @Injectable()
	  class Sample extends superClass {
	    ...
	    ngOnInit(): void {
	      super.ngOnInit(); // Make sure to call super lifecycle method!
        //Implementation here
	    }		
            ...
	  }

	  return Sample;
	}
	```

	```typescript

	//app.component.ts

	@Component({
	  ...
	})
	export class AppComponent extends SampleMixin(Base) { 
	  ...
	  ngOnInit(): void {
	    super.ngOnInit(); // Make sure to call super lifecycle method!
	    //Implementation here
	  }		
	  ...
    }
	```

[Back to top](#table-of-contents)

<br>

<b>Angular @Input and @Outputs Decorators</b><a name="input-output"></a>
- If `@Input`/`@Output` decorators are used in mixins, they will need to be declared in the `@Component` decorator of the component.

	```typescript
	//sample.mixin.ts

	export const SampleMixin = <Tbase extends BaseInjectorConstructor>(superClass: Tbase) => {

	  @Injectable()
	  class Sample extends superClass {
	    @Input sampleInput = '';
	    @Output sampleOutput = new EventEmitter<any>();
	    
	    ...
	  }

	  return Sample;
	}
	```

	```typescript

	//app.component.ts

	@Component({
	  ...
	  inputs: ['sampleInput'],
	  outputs: ['sampleOutput']
	})
	export class AppComponent extends SampleMixin(Base) { ... }
	```
[Back to top](#table-of-contents)

<br>

<b>Angular Services</b><a name="services"></a>

- Services can be accessed via Angular's `Injector` which is available in every mixin class.
	```typescript
	//sample.mixin.ts
	import { SampleService } from './sample.service.ts'

	export const SampleMixin = <Tbase extends BaseInjectorConstructor>(superClass: Tbase) => {

	  @Injectable()
	  class Sample extends superClass {

	    sampleService = this.injector.get(SampleService);
	    
	    ...
	  }

	  return Sample;
	}
	```

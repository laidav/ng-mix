import { 
  Injectable,
  Injector,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges
} from "@angular/core";

@Injectable()
export abstract class BaseClassInjector implements
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor(public injector: Injector) {}

  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
  ngDoCheck(): void {}
  ngAfterContentInit(): void {}
  ngAfterContentChecked(): void {}
  ngAfterViewInit(): void {}
  ngAfterViewChecked(): void {}
  ngOnDestroy(): void {}
}

type GConstructor<T = {}> = new (...args: any[]) => T;

export type BaseInjectorConstructor = GConstructor<BaseClassInjector>;

export class Base extends BaseClassInjector {};

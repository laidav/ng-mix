import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SandboxComponent } from '../app/sandbox/sandbox.component';
import { BeerCountComponent } from '../app/beer-count/beer-count.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        SandboxComponent,
        BeerCountComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // #region MIXIN INPUTS & OUTPUTS
  it('should pass proper LabelMixin Input to sandbox component and append suffix from LabelMixin', () => {
    const button = fixture.nativeElement.querySelector('.sandbox-title');
    expect(button.innerHTML).toBe('Hiding Drinkers with Label Mixin Suffix');
  });

  it('should recieve the LabelMixin Output event on sandbox button click', () => {
    spyOn(component, 'onEvent');
    const button = fixture.nativeElement.querySelector('.sandbox-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.onEvent).toHaveBeenCalled();
  });
  // #endregion MIXIN INPUTS & OUTPUTS

  // #region LIFECYCLE HOOKS
  describe('Lifecycle hooks', () => {
    let button: any;

    beforeEach(() => {
      spyOn(console, 'log');
      button = fixture.nativeElement.querySelector('.toggle-drinkers');
      button.dispatchEvent(new Event('click'));
      fixture.detectChanges();
    });

    it('ngOnChanges - label input change should trigger hook in the mixins', () => {
      expect(console.log).toHaveBeenCalledWith('Showing Drinkers', 'ngOnChanges in Label mixin');
      expect(console.log).toHaveBeenCalledWith('Showing Drinkers', 'ngOnChanges in Persons Mixin');
    });

    it('ngOnInit - counter mixin should call ngOnInit with initial counter values', () => {
      expect(console.log).toHaveBeenCalledWith('ngOnInit in counter mixin', 0);
      expect(console.log).toHaveBeenCalledWith('ngOnInit in counter mixin', 2);
    });

    it('ngDoCheck - counter mixin should call ngDoCheck with initial counter values', () => {
      expect(console.log).toHaveBeenCalledWith('ngDoCheck in counter mixin', 0);
      expect(console.log).toHaveBeenCalledWith('ngDoCheck in counter mixin', 2);
    });

    it('ngAfterContentInit - counter mixin should call ngAfterContentInit with initial counter values', () => {
      expect(console.log).toHaveBeenCalledWith('ngAfterContentInit in counter mixin', 0);
      expect(console.log).toHaveBeenCalledWith('ngAfterContentInit in counter mixin', 2);
    });

    it('ngAfterContentChecked - counter mixin should call ngAfterContentChecked with initial counter values', () => {
      expect(console.log).toHaveBeenCalledWith('ngAfterContentChecked in counter mixin', 0);
      expect(console.log).toHaveBeenCalledWith('ngAfterContentChecked in counter mixin', 2);
    });

    it('ngAfterViewInit - counter mixin should call ngAfterViewInit with initial counter values', () => {
      expect(console.log).toHaveBeenCalledWith('ngAfterViewInit in counter mixin', 0);
      expect(console.log).toHaveBeenCalledWith('ngAfterViewInit in counter mixin', 2);
    });

    it('ngAfterViewChecked - counter mixin should call ngAfterViewChecked with initial counter values', () => {
      expect(console.log).toHaveBeenCalledWith('ngAfterViewChecked in counter mixin', 0);
      expect(console.log).toHaveBeenCalledWith('ngAfterViewChecked in counter mixin', 2);
    });

    it('ngOnDestroy - counter mixin should call ngOnDestroy and unsubscribe', () => {
      button.dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(console.log).toHaveBeenCalledWith('subscriptionsUnsubscribed=', false);
      expect(console.log).toHaveBeenCalledWith('subscriptionsUnsubscribed=', true);
    });
  })
  // #endregion LIFECYCLE HOOKS
});

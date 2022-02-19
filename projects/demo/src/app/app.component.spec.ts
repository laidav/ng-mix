import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SandboxComponent } from '../app/sandbox/sandbox.component';

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
        SandboxComponent
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
  it('ngOnChanges - label input change should trigger hook in the mixins', () => {
    spyOn(console, 'log');
    component.changeLabel();
    fixture.detectChanges();
    expect(console.log).toHaveBeenCalledWith('Showing Drinkers', 'ngOnChanges in Label mixin');
    expect(console.log).toHaveBeenCalledWith('Showing Drinkers', 'ngOnChanges in Persons Mixin');
  });
  // #endregion LIFECYCLE HOOKS
});

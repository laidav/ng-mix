import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonService } from '../../services/person.service';

import { SandboxComponent } from './sandbox.component';

describe('SandboxComponent', () => {
  let component: SandboxComponent;
  let fixture: ComponentFixture<SandboxComponent>;

  // Test cases
  // - Inputs Outputs
  // - Services injection
  // - LifeCycle Hooks
  //    - ngOnChanges
  //    - ngOnInit
  //    - ngDoCheck
  //    - ngAfterContentInit
  //    - ngAfterContectChecked
  //    - ngAfterViewInit
  //    - ngAfterViewChecked
  //    - ngOnDestroy

  // - Template tests
  //    - Async pipes
  //    - structural directives
  //    - attribute directives


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // #region INHERIT FROM MIXINS
  it('should create and inherit properties, methods from mixins', () => {
    expect(component).toBeTruthy();
    // LabelMixin
    expect(component.labelEvent).toBeTruthy();
    expect(component.label).toBe('');

    // PersonsMixin
    expect(component.alertPersons).toBeTruthy();
    expect(component.personSrvc).toBeTruthy();
    expect(component.persons$).toBeTruthy();

  });

  it('it should emit a label event and call alertPersons method when button is clicked AND set new personOfTheMonth in personSrvc', () => {
    spyOn(component.labelEvent, 'emit');
    spyOn(component, 'alertPersons');
    const button = fixture.nativeElement.querySelector('.sandbox-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.labelEvent.emit).toHaveBeenCalled();
    expect(component.alertPersons).toHaveBeenCalled();
  });

  // #endregion INHERIT FROM MIXINS

  // #region SERVICES
  it('component personSrvc should be the same as PersonsService obtained from injector', () => {
    expect(component.personSrvc).toBe(component.injector.get(PersonService));
  });

  it('should set new personOfTheMonth in PersonService', () => {
    expect(component.personSrvc.personOfTheMonth).toBeUndefined();

    spyOn(component.labelEvent, 'emit');
    const button = fixture.nativeElement.querySelector('.sandbox-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.injector.get(PersonService).personOfTheMonth)
      .toEqual({ firstName: 'new', lastName: 'guy' });
  });
  // #endregion SERVICES
});

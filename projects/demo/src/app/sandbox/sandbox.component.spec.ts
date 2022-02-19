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
    expect(component.labelEvent).toBeTruthy();
    expect(component.alertPersons).toBeTruthy();
    expect(component.personSrvc).toBeTruthy();
    expect(component.personSrvc.personOfTheMonth).toBeUndefined();
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
  it('should detect the new personOfTheMonth in PersonsService', () => {
    expect(component).toBeTruthy();
    expect(component.labelEvent).toBeTruthy();
    expect(component.alertPersons).toBeTruthy();
  });

  it('it should set new personOfTheMonth in PersonService', () => {
    spyOn(component.labelEvent, 'emit');
    const button = fixture.nativeElement.querySelector('.sandbox-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.injector.get(PersonService).personOfTheMonth)
      .toEqual({ firstName: 'new', lastName: 'guy' });
  });
  // #endregion SERVICES
});

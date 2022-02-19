import { asNativeElements } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

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

  it('should create and have an alertPerson method and label event emitter inherited from the PersonsMixin and LabelMixin respectively', () => {
    expect(component).toBeTruthy();
    expect(component.labelEvent).toBeTruthy();
    expect(component.alertPersons).toBeTruthy();
  });

  it('it should emit a label event and call alertPersons method when button is clicked', () => {
    spyOn(component.labelEvent, 'emit');
    const button = fixture.nativeElement.querySelector('.sandbox-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.labelEvent.emit).toHaveBeenCalled();
  });
});

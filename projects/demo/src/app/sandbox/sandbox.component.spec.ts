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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

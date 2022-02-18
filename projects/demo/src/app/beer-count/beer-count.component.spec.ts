import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCountComponent } from './beer-count.component';

describe('BeerCountComponent', () => {
  let component: BeerCountComponent;
  let fixture: ComponentFixture<BeerCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

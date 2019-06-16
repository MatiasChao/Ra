import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbTensesComponent } from './verb-tenses.component';

describe('VerbTensesComponent', () => {
  let component: VerbTensesComponent;
  let fixture: ComponentFixture<VerbTensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerbTensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerbTensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubspayComponent } from './subspay.component';

describe('SubspayComponent', () => {
  let component: SubspayComponent;
  let fixture: ComponentFixture<SubspayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubspayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubspayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

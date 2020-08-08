import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPayComponent } from './doc-pay.component';

describe('DocPayComponent', () => {
  let component: DocPayComponent;
  let fixture: ComponentFixture<DocPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

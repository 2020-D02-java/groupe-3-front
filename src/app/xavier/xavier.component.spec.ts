import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XavierComponent } from './xavier.component';

describe('XavierComponent', () => {
  let component: XavierComponent;
  let fixture: ComponentFixture<XavierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XavierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XavierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

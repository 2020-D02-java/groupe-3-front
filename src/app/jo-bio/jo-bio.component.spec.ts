import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoBioComponent } from './jo-bio.component';

describe('JoBioComponent', () => {
  let component: JoBioComponent;
  let fixture: ComponentFixture<JoBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

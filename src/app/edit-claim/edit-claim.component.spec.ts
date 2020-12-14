import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClaimComponent } from './edit-claim.component';

describe('EditClaimComponent', () => {
  let component: EditClaimComponent;
  let fixture: ComponentFixture<EditClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

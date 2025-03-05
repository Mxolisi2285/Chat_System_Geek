import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSignUpComponentComponent } from './user-sign-up-component.component';

describe('UserSignUpComponentComponent', () => {
  let component: UserSignUpComponentComponent;
  let fixture: ComponentFixture<UserSignUpComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSignUpComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSignUpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

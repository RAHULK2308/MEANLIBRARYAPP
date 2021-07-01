import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsingleComponent } from './authorsingle.component';

describe('AuthorsingleComponent', () => {
  let component: AuthorsingleComponent;
  let fixture: ComponentFixture<AuthorsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorsingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

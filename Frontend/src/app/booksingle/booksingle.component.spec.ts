import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksingleComponent } from './booksingle.component';

describe('BooksingleComponent', () => {
  let component: BooksingleComponent;
  let fixture: ComponentFixture<BooksingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

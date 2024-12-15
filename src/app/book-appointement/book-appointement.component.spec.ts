import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAppointementComponent } from './book-appointement.component';

describe('BookAppointementComponent', () => {
  let component: BookAppointementComponent;
  let fixture: ComponentFixture<BookAppointementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookAppointementComponent]
    });
    fixture = TestBed.createComponent(BookAppointementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

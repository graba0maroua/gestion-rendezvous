import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezvousProComponent } from './rendezvous-pro.component';

describe('RendezvousProComponent', () => {
  let component: RendezvousProComponent;
  let fixture: ComponentFixture<RendezvousProComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RendezvousProComponent]
    });
    fixture = TestBed.createComponent(RendezvousProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

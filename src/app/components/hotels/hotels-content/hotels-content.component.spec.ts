import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelsContentComponent } from './hotels-content.component';

describe('HotelsContentComponent', () => {
  let component: HotelsContentComponent;
  let fixture: ComponentFixture<HotelsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelsContentComponent]
    });
    fixture = TestBed.createComponent(HotelsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

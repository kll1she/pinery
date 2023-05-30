import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsContentComponent } from './attractions-content.component';

describe('AttractionsContentComponent', () => {
  let component: AttractionsContentComponent;
  let fixture: ComponentFixture<AttractionsContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttractionsContentComponent]
    });
    fixture = TestBed.createComponent(AttractionsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

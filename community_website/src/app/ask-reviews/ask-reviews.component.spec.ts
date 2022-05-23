import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskReviewsComponent } from './ask-reviews.component';

describe('AskReviewsComponent', () => {
  let component: AskReviewsComponent;
  let fixture: ComponentFixture<AskReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

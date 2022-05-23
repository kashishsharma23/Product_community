import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSearchedResultComponent } from './show-searched-result.component';

describe('ShowSearchedResultComponent', () => {
  let component: ShowSearchedResultComponent;
  let fixture: ComponentFixture<ShowSearchedResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSearchedResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSearchedResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostedDateComponent } from './posted-date.component';

describe('PostedDateComponent', () => {
  let component: PostedDateComponent;
  let fixture: ComponentFixture<PostedDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostedDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostedDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

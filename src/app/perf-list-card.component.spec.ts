import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfListCardComponent } from './perf-list-card.component';

describe('PerfListCardComponent', () => {
  let component: PerfListCardComponent;
  let fixture: ComponentFixture<PerfListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PerfListCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

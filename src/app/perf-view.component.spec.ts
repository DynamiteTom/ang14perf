import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfViewComponent } from './perf-view.component';

describe('PerfViewComponent', () => {
  let component: PerfViewComponent;
  let fixture: ComponentFixture<PerfViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PerfViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

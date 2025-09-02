import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalMapDataComponent } from './global-map-data.component';

describe('GlobalMapDataComponent', () => {
  let component: GlobalMapDataComponent;
  let fixture: ComponentFixture<GlobalMapDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalMapDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalMapDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

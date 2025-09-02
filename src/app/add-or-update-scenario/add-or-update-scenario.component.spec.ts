import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrUpdateScenarioComponent } from './add-or-update-scenario.component';

describe('AddOrUpdateScenarioComponent', () => {
  let component: AddOrUpdateScenarioComponent;
  let fixture: ComponentFixture<AddOrUpdateScenarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrUpdateScenarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrUpdateScenarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

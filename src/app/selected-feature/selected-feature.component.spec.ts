import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelectedFeatureComponent } from './selected-feature.component';

describe('SelectedFeatureComponent', () => {
  let component: SelectedFeatureComponent;
  let fixture: ComponentFixture<SelectedFeatureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

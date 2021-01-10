import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchpadButtonComponent } from './launchpad-button.component';

describe('LaunchpadButtonComponent', () => {
  let component: LaunchpadButtonComponent;
  let fixture: ComponentFixture<LaunchpadButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchpadButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchpadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

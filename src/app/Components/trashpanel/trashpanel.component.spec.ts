import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrashpanelComponent } from './trashpanel.component';

describe('TrashpanelComponent', () => {
  let component: TrashpanelComponent;
  let fixture: ComponentFixture<TrashpanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrashpanelComponent]
    });
    fixture = TestBed.createComponent(TrashpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotepanelComponent } from './notepanel.component';

describe('NotepanelComponent', () => {
  let component: NotepanelComponent;
  let fixture: ComponentFixture<NotepanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotepanelComponent]
    });
    fixture = TestBed.createComponent(NotepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

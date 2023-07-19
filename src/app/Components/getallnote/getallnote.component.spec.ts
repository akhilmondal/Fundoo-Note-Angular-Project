import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallnoteComponent } from './getallnote.component';

describe('GetallnoteComponent', () => {
  let component: GetallnoteComponent;
  let fixture: ComponentFixture<GetallnoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetallnoteComponent]
    });
    fixture = TestBed.createComponent(GetallnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

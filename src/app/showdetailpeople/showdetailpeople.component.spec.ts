import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdetailpeopleComponent } from './showdetailpeople.component';

describe('ShowdetailpeopleComponent', () => {
  let component: ShowdetailpeopleComponent;
  let fixture: ComponentFixture<ShowdetailpeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdetailpeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdetailpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

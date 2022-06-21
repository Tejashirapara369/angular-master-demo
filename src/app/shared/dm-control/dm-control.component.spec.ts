import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmControlComponent } from './dm-control.component';

describe('DmControlComponent', () => {
  let component: DmControlComponent;
  let fixture: ComponentFixture<DmControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

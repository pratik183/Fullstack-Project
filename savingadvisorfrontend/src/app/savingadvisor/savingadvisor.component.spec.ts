import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingadvisorComponent } from './savingadvisor.component';

describe('SavingadvisorComponent', () => {
  let component: SavingadvisorComponent;
  let fixture: ComponentFixture<SavingadvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingadvisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavingadvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

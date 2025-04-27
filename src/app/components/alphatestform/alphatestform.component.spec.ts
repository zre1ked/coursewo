import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphatestformComponent } from './alphatestform.component';

describe('AlphatestformComponent', () => {
  let component: AlphatestformComponent;
  let fixture: ComponentFixture<AlphatestformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlphatestformComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlphatestformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuffleComponent } from './shuffle.component';

describe('ShuffleComponent', () => {
  let component: ShuffleComponent;
  let fixture: ComponentFixture<ShuffleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShuffleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShuffleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

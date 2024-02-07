import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorridasDfComponent } from './corridas-df.component';

describe('CorridasDfComponent', () => {
  let component: CorridasDfComponent;
  let fixture: ComponentFixture<CorridasDfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorridasDfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorridasDfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

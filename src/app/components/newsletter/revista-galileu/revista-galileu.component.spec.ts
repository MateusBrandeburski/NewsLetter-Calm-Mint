import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevistaGalileuComponent } from './revista-galileu.component';

describe('RevistaGalileuComponent', () => {
  let component: RevistaGalileuComponent;
  let fixture: ComponentFixture<RevistaGalileuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevistaGalileuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevistaGalileuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticasAnimesComponent } from './noticas-animes.component';

describe('NoticasAnimesComponent', () => {
  let component: NoticasAnimesComponent;
  let fixture: ComponentFixture<NoticasAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticasAnimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticasAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

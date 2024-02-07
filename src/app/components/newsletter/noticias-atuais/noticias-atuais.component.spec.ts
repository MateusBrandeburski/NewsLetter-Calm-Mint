import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasAtuaisComponent } from './noticias-atuais.component';

describe('NoticiasAtuaisComponent', () => {
  let component: NoticiasAtuaisComponent;
  let fixture: ComponentFixture<NoticiasAtuaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasAtuaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasAtuaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

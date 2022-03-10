import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCarrosComponent } from './cadastrar-carros.component';

describe('CadastrarCarrosComponent', () => {
  let component: CadastrarCarrosComponent;
  let fixture: ComponentFixture<CadastrarCarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastrarCarrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

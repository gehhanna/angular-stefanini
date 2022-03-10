import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCarrosComponent } from './editar-carros.component';

describe('EditarCarrosComponent', () => {
  let component: EditarCarrosComponent;
  let fixture: ComponentFixture<EditarCarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCarrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Alerta2Component } from './alerta2.component';

describe('Alerta2Component', () => {
  let component: Alerta2Component;
  let fixture: ComponentFixture<Alerta2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Alerta2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Alerta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

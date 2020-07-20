import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Activ1Page } from './activ1.page';

describe('Activ1Page', () => {
  let component: Activ1Page;
  let fixture: ComponentFixture<Activ1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activ1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Activ1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

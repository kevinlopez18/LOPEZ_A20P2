import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Activ6Page } from './activ6.page';

describe('Activ6Page', () => {
  let component: Activ6Page;
  let fixture: ComponentFixture<Activ6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activ6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Activ6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

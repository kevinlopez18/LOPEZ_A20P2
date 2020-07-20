import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Activ4Page } from './activ4.page';

describe('Activ4Page', () => {
  let component: Activ4Page;
  let fixture: ComponentFixture<Activ4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activ4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Activ4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

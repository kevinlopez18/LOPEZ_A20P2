import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Activ2Page } from './activ2.page';

describe('Activ2Page', () => {
  let component: Activ2Page;
  let fixture: ComponentFixture<Activ2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activ2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Activ2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

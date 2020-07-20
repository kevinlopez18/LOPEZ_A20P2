import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Activ3Page } from './activ3.page';

describe('Activ3Page', () => {
  let component: Activ3Page;
  let fixture: ComponentFixture<Activ3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activ3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Activ3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

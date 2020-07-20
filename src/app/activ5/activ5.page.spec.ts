import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Activ5Page } from './activ5.page';

describe('Activ5Page', () => {
  let component: Activ5Page;
  let fixture: ComponentFixture<Activ5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Activ5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Activ5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

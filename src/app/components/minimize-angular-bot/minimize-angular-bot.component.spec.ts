import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimizeAngularBotComponent } from './minimize-angular-bot.component';

describe('MinimizeAngularBotComponent', () => {
  let component: MinimizeAngularBotComponent;
  let fixture: ComponentFixture<MinimizeAngularBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimizeAngularBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimizeAngularBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularChatBotComponent } from './angular-chat-bot.component';

describe('AngularChatBotComponent', () => {
  let component: AngularChatBotComponent;
  let fixture: ComponentFixture<AngularChatBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularChatBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularChatBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

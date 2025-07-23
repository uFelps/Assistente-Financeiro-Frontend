import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAssistenteIa } from './chat-assistente-ia';

describe('Chat', () => {
  let component: ChatAssistenteIa;
  let fixture: ComponentFixture<ChatAssistenteIa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatAssistenteIa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatAssistenteIa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

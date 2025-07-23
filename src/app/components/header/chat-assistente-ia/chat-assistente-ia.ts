import {Component, ViewChild, AfterViewChecked} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Button} from "primeng/button";
import {DatePipe} from "@angular/common";
import {Dialog} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {InputText} from "primeng/inputtext";
import {ScrollPanel} from "primeng/scrollpanel";


interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-chat-assistente-ia',
  imports: [
    CommonModule,
    Button,
    DatePipe,
    Dialog,
    FormsModule,
    InputText,
    ScrollPanel
  ],
  templateUrl: './chat-assistente-ia.html',
  styleUrl: './chat-assistente-ia.css'
})
export class ChatAssistenteIa implements AfterViewChecked {

  chatVisible = false;
  messages: ChatMessage[] = [];
  currentMessage = '';
  private messageIdCounter = 1;
  private shouldScrollToBottom = false;

  @ViewChild('scrollPanel') scrollPanel!: ScrollPanel;

  constructor() {
    // Mensagem de boas-vindas
    this.addMessage('Olá! Sou seu assistente financeiro inteligente. Como posso ajudá-lo hoje?', false);
  }

  openChat() {
    this.chatVisible = true;
  }

  closeChat() {
    this.chatVisible = false;
  }

  sendMessage() {
    if (this.currentMessage.trim()) {
      // Adiciona mensagem do usuário
      this.addMessage(this.currentMessage, true);

      // Simula resposta da IA após um pequeno delay
      setTimeout(() => {
        const aiResponse = this.generateAIResponse(this.currentMessage);
        this.addMessage(aiResponse, false);
      }, 1000);

      this.currentMessage = '';
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  private addMessage(text: string, isUser: boolean) {
    const message: ChatMessage = {
      id: this.messageIdCounter++,
      text: text,
      isUser: isUser,
      timestamp: new Date()
    };
    this.messages.push(message);
    this.shouldScrollToBottom = true;
  }

  private generateAIResponse(userMessage: string): string {
    const responses = [
      'Entendi sua pergunta sobre finanças. Posso ajudá-lo a organizar melhor seu orçamento.',
      'Baseado na sua consulta, recomendo que você analise seus gastos mensais primeiro.',
      'Ótima pergunta! Para uma gestão financeira eficiente, sugiro categorizar suas despesas.',
      'Posso ajudá-lo a criar um plano de economia personalizado. Que tal começarmos?',
      'Suas finanças são importantes! Vamos trabalhar juntos para otimizar seus investimentos.',
      'Compreendo sua situação. Que tal definirmos metas financeiras claras?'
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  }

  ngAfterViewChecked(): void {
    if (this.shouldScrollToBottom && this.scrollPanel) {
      this.scrollToBottom();
    }
  }

  private scrollToBottom(): void {
    try {
      const scrollElement = this.scrollPanel.el.nativeElement.querySelector('.p-scrollpanel-content');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
        this.shouldScrollToBottom = false;
      }
    } catch (err) {
      console.error('Erro ao fazer scroll para o final:', err);
    }
  }

}

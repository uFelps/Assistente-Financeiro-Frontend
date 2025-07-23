import {Component} from '@angular/core';
import {Button} from 'primeng/button';
import {Dialog} from 'primeng/dialog';
import {InputText} from 'primeng/inputtext';
import {ScrollPanel} from 'primeng/scrollpanel';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

interface ChatMessage {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-header',
  imports: [
    Button,
    Dialog,
    InputText,
    ScrollPanel,
    FormsModule,
    CommonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  chatVisible = false;
  messages: ChatMessage[] = [];
  currentMessage = '';
  private messageIdCounter = 1;

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
}

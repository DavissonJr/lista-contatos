import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-mensagem-erro',
  imports: [],
  templateUrl: './mensagem-erro.component.html',
  styleUrl: './mensagem-erro.component.css'
})
export class MensagemErroComponent {
  @Input() control!: FormControl
}

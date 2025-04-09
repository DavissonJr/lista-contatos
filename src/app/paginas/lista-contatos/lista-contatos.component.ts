import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { SeparadorComponent } from '../../componentes/separador/separador.component';
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../componentes/container/container.component';

import { RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';
import { IContato } from '../../componentes/contato/icontato';
import { PerfilContatoComponent } from "../perfil-contato/perfil-contato.component";

@Component({
  selector: 'app-lista-contatos',
  imports: [
    ContainerComponent,
    CommonModule,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    RouterLink
],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent implements OnInit{
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz'
  contatos: IContato[] = [];

  filtroPorTexto: string = ''

  constructor(private contatoService: ContatoService) {}

  ngOnInit(){
    this.contatoService.obterContatos().subscribe(listaContatos => {
      this.contatos = listaContatos
    });
  }

  private removerAcentos(texto: string): string{
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  filtrarContatosPorTexto(): IContato[]{
    if(!this.filtroPorTexto){
      return this.contatos
    }
    return this.contatos.filter(contato => {
      return this.removerAcentos(contato.nome).toLowerCase().includes(this.removerAcentos(this.filtroPorTexto).toLowerCase())
    })
  }

  filtrarContatosPorLetraInical(letra:string) : IContato[] {
    return this.filtrarContatosPorTexto().filter( contato => {
      return this.removerAcentos(contato.nome).toLowerCase().startsWith(this.removerAcentos(letra).toLowerCase())
    })
  }
}

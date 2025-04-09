import { Injectable } from '@angular/core';
import { IContato } from '../componentes/contato/icontato';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private contatos: IContato[] = [
    {"id": 1, "nome": "Ace", "telefone": "29 278869420", "email": "ace@email.com"},
    {"id": 2, "nome": "Arlong", "telefone": "38 128451235", "email": "arlong@email.com"},
    {"id": 3, "nome": "Bartolomeo", "telefone": "95 695521583", "email": "barto@email.com"},
    {"id": 4, "nome": "Bege", "telefone": "25 854986459", "email": "bege@email.com"},
    {"id": 5, "nome": "Brook", "telefone": "94 543197849", "email": "brook@email.com"},
    {"id": 6, "nome": "Oars", "telefone": "56 613692441", "email": "oars@email.com"}
  ]

  constructor() { 
  //Obter os dados do localStorage

  const contatosLocalStorageString = localStorage.getItem('contatos');
  const contatosLocalStorage = contatosLocalStorageString ? JSON.parse(contatosLocalStorageString) : null

  if(contatosLocalStorage !== null){
    this.contatos = contatosLocalStorage || null;
  }

  //Salvar no localStorage

  localStorage.setItem('contato', JSON.stringify(this.contatos));

  }

  obterContatos(){
    return this.contatos;
  }

  salvarContatos(contato: IContato){
    this.contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(this.contatos))
  }
}

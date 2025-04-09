import { Component, OnInit } from '@angular/core';
import { ContainerComponent } from "../../componentes/container/container.component";
import { CommonModule } from '@angular/common';
import { IContato } from '../../componentes/contato/icontato';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ContatoService } from '../../services/contato.service';

@Component({
  selector: 'app-perfil-contato',
  imports: [ContainerComponent, CommonModule, RouterLink],
  templateUrl: './perfil-contato.component.html',
  styleUrl: './perfil-contato.component.css'
})
export class PerfilContatoComponent implements OnInit {

  contato: IContato = {
    id: 0,
    nome: '',
    telefone: '',
    email: '',
    aniversario: '',
    redes: ''
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private contatoService: ContatoService,
    private router: Router
  ){}

    ngOnInit(){
      const id = this.activatedRoute.snapshot.paramMap.get('id');
                                // ! -> garante não nulo
      this.contatoService.buscarPorId(parseInt(id!)).subscribe((contato)=>{
        this.contato = contato
      })
    }

    excluir(){
      if(this.contato.id){
        this.contatoService.excluirContato(this.contato.id).subscribe(()=>{
          this.router.navigateByUrl('/lista-contatos')
        })
      }
    }

}

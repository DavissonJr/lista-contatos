import { Injectable } from '@angular/core';
import { IContato } from '../componentes/contato/icontato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private readonly API = 'http://localhost:3000/contatos'

  constructor(private http: HttpClient) { }

  obterContatos(): Observable<IContato[]> {
    return this.http.get<IContato[]>(this.API);
  }

  salvarContatos(contato: IContato):Observable<IContato>{
    return this.http.post<IContato>(this.API, contato)
  }

  buscarPorId(id: number): Observable<IContato>{
    const url = `${this.API}/${id}`
    return this.http.get<IContato>(url)
  }

  excluirContato(id: number): Observable<IContato>{
    const url = `${this.API}/${id}`
    return this.http.delete<IContato>(url)
  }

  editarContato(contato: IContato): Observable<IContato>{
    const url = `${this.API}/${contato.id}`
    return this.http.put<IContato>(url, contato)
  }

  editarOuSalvarContato(contato: IContato): Observable<IContato>{
    if(contato.id){
      return this.editarContato(contato)
    } else{
      return this.salvarContatos(contato)
    }
  }

}

import { Model } from './model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,of } from 'rxjs';
import { map,catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class ViaCepService {
  private readonly API_URL = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) { }

  buscarPorCep(cep: string): Observable<Model> {
    const url = `${this.API_URL}/${cep}/json`;

    return this.http.get(url).pipe(
      map((resultado: any) => {
        if (resultado.erro) {
          throw new Error('CEP não encontrado');
        }

        return {
          address: resultado.logradouro,
          city: resultado.localidade,
          state: resultado.uf,
          country: 'Brasil',
        } as Model;
      }),
      catchError((error: any) => {
        if (error.status === 404) {
          throw new Error('CEP inválido');
        }

        throw error;
      })
    );
  }
}


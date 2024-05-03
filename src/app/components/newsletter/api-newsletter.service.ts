import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CorridasDF, NoticiasCientificas, NoticiasAnime, NoticiasAtuais } from './newsletter';

@Injectable({
  providedIn: 'root'
})
export class ApiNewsletterService {
  private readonly API = 'https://api-hd.odin-srv-project.com';

  constructor(private http: HttpClient) {}

  listar(): Observable<CorridasDF[]> {
    const url = `${this.API}/corridas-df`;
    return this.http.get<CorridasDF[]>(url);
  }

  listarNoticiasCientificas(): Observable<NoticiasCientificas[]> {
    const url = `${this.API}/noticias-cientificas`;
    return this.http.get<NoticiasCientificas[]>(url);
  }

  listarNoticiasAnime(): Observable<NoticiasAnime[]> {
    const url = `${this.API}/noticias-anime`;
    return this.http.get<NoticiasAnime[]>(url);
  }

  listarNoticiasAtuais(): Observable<NoticiasAtuais[]> {
    const url = `${this.API}/noticias-atuais`;
    return this.http.get<NoticiasAtuais[]>(url);
  }

}

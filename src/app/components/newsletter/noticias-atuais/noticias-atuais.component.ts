import { NoticiasAtuais } from './../newsletter';
import { Component, OnInit } from '@angular/core';
import { ApiNewsletterService } from '../api-newsletter.service';

@Component({
  selector: 'app-noticias-atuais',
  templateUrl: './noticias-atuais.component.html',
  styleUrls: ['./noticias-atuais.component.css']
})
export class NoticiasAtuaisComponent implements OnInit {

  NoticiasAtuais: NoticiasAtuais[] = [];
  pagedItems: NoticiasAtuais[] = []; // Itens para exibição na página atual
  totalNoticias = 0; // Total de notícias
  currentPage = 1;
  itemsPerPage = 13; // Limite de itens por página

  constructor(private service: ApiNewsletterService) { }

  ngOnInit(): void {
    this.service.listarNoticiasAtuais().subscribe((NoticiasAtuais: NoticiasAtuais[]) => {
      this.NoticiasAtuais = NoticiasAtuais;
      this.totalNoticias = NoticiasAtuais.length; // Atualiza a contagem total
      this.setPage(this.currentPage); 
      // Define a primeira página ao iniciar
    });
  }

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedItems = this.NoticiasAtuais.slice(startIndex, endIndex);
  }

  getTotalAtualNaPagina(): string {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
    const endIndex = this.totalNoticias
    return `${startIndex}-${endIndex}`;
  }

}

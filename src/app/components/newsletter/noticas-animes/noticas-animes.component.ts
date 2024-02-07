import { NoticiasAnime } from './../newsletter';
import { Component, OnInit } from '@angular/core';
import { ApiNewsletterService } from '../api-newsletter.service';

@Component({
  selector: 'app-noticas-animes',
  templateUrl: './noticas-animes.component.html',
  styleUrls: ['./noticas-animes.component.css']
})
export class NoticasAnimesComponent implements OnInit {

  NoticiasAnime: NoticiasAnime[] = []
  pagedItems: NoticiasAnime[] = []; // Itens para exibição na página atual
  totalNoticias = 0; // Total de notícias
  currentPage = 1;
  itemsPerPage = 13; 


  constructor(private service: ApiNewsletterService) { }

  ngOnInit(): void {
    this.service.listarNoticiasAnime().subscribe((NoticiasAnime: NoticiasAnime[])=> {
      this.NoticiasAnime = NoticiasAnime
      this.totalNoticias = NoticiasAnime.length; // Define o total de corridas
      this.setPage(this.currentPage); // Define a primeira página
    })
  }

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedItems = this.NoticiasAnime.slice(startIndex, endIndex);
  }
  
  getTotalAtualNaPagina(): string {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
    const endIndex = this.totalNoticias
    return `${startIndex}-${endIndex}`;
  }
  
}
import { NoticiasCientificas } from './../newsletter';
import { Component, OnInit } from '@angular/core';
import { ApiNewsletterService } from '../api-newsletter.service';

@Component({
  selector: 'app-revista-galileu',
  templateUrl: './revista-galileu.component.html',
  styleUrls: ['./revista-galileu.component.css']
})
export class RevistaGalileuComponent implements OnInit {

  NoticiasCientificas: NoticiasCientificas[] = []
  pagedItems: NoticiasCientificas[] = []; // Itens para exibição na página atual
  totalNoticias = 0; // Total de notícias
  currentPage = 1;
  itemsPerPage = 13; 


  constructor(private service: ApiNewsletterService) { }

  ngOnInit(): void {
    this.service.listarNoticiasCientificas().subscribe((NoticiasCientificas: NoticiasCientificas[])=> {
      this.NoticiasCientificas = NoticiasCientificas
      this.totalNoticias = NoticiasCientificas.length; // Define o total de corridas
      this.setPage(this.currentPage); // Define a primeira página

    })
  }

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedItems = this.NoticiasCientificas.slice(startIndex, endIndex);
  }
  
  getTotalAtualNaPagina(): string {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
    const endIndex = this.totalNoticias
    return `${startIndex}-${endIndex}`;
  }


}


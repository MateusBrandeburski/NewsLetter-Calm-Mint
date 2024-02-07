import { Component, OnInit } from '@angular/core';
import { CorridasDF } from '../newsletter';
import { ApiNewsletterService } from '../api-newsletter.service';

@Component({
  selector: 'app-corridas-df',
  templateUrl: './corridas-df.component.html',
  styleUrls: ['./corridas-df.component.css']
})
export class CorridasDfComponent implements OnInit {

  listaCorridasDF: CorridasDF[] = [];
  pagedItems: CorridasDF[] = []; // Itens para exibição na página atual
  totalNoticias = 0; // Total de notícias
  currentPage = 1;
  itemsPerPage = 10; 

  constructor(private service: ApiNewsletterService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaCorridasDF: CorridasDF[]) => {
      this.listaCorridasDF = listaCorridasDF;
      this.totalNoticias = listaCorridasDF.length; // Define o total de corridas
      this.setPage(this.currentPage); // Define a primeira página
    });
  }
  

  setPage(page: number) {
    this.currentPage = page;
    const startIndex = (page - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedItems = this.listaCorridasDF.slice(startIndex, endIndex);
  }
  
  getTotalAtualNaPagina(): string {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage + 1;
    const endIndex = this.totalNoticias
    return `${startIndex}-${endIndex}`;
  }

}

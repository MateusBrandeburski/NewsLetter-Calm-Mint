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

  constructor(private service: ApiNewsletterService) { }

  ngOnInit(): void {
    this.service.listarNoticiasAnime().subscribe((NoticiasAnime: NoticiasAnime[])=> {
      this.NoticiasAnime = NoticiasAnime
    })
  }
}
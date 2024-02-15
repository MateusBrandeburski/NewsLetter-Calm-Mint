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

  constructor(private service: ApiNewsletterService) { }

  ngOnInit(): void {
    this.service.listarNoticiasCientificas().subscribe((NoticiasCientificas: NoticiasCientificas[])=> {
      this.NoticiasCientificas = NoticiasCientificas

    })
  }
}
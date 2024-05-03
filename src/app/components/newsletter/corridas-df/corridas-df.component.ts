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

  constructor(private service: ApiNewsletterService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaCorridasDF: CorridasDF[]) => {
      this.listaCorridasDF = listaCorridasDF;
      console.log(listaCorridasDF);
    });
  }

}  
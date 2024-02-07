import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorridasDfComponent } from './components/newsletter/corridas-df/corridas-df.component';
import { HomeComponent } from './components/home/home.component';
import { RevistaGalileuComponent } from './components/newsletter/revista-galileu/revista-galileu.component';
import { NoticasAnimesComponent } from './components/newsletter/noticas-animes/noticas-animes.component';
import { NoticiasAtuaisComponent } from './components/newsletter/noticias-atuais/noticias-atuais.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,

  },
  {
    path: 'corridas-df',
    component: CorridasDfComponent
  },
  {
    path: 'noticias-cientificas',
    component: RevistaGalileuComponent
  },
  {
    path: 'noticias-anime',
    component: NoticasAnimesComponent
  },
  {
    path: 'noticias-atuais',
    component: NoticiasAtuaisComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
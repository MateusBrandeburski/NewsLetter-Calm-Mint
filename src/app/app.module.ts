import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CurriculoComponent } from './components/home/curriculo/curriculo.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CorridasDfComponent } from './components/newsletter/corridas-df/corridas-df.component';
import { NoticasAnimesComponent } from './components/newsletter/noticas-animes/noticas-animes.component';
import { RevistaGalileuComponent } from './components/newsletter/revista-galileu/revista-galileu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ApresentacaoComponent } from './components/home/apresentacao/apresentacao.component';
import { DescricaoComponent } from './components/home/descricao/descricao.component';
import { NoticiasAtuaisComponent } from './components/newsletter/noticias-atuais/noticias-atuais.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsletterComponent,
    CorridasDfComponent,
    NoticasAnimesComponent,
    RevistaGalileuComponent,
    FooterComponent,
    HomeComponent,
    ApresentacaoComponent,
    DescricaoComponent,
    CurriculoComponent,
    NoticiasAtuaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FimComponent } from './components/home/fim/fim.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CorridasDfComponent } from './components/newsletter/corridas-df/corridas-df.component';
import { NoticasAnimesComponent } from './components/newsletter/noticas-animes/noticas-animes.component';
import { RevistaGalileuComponent } from './components/newsletter/revista-galileu/revista-galileu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CabecalhoComponent } from './components/home/cabecalho/cabecalho.component';
import { MeioComponent } from './components/home/meio/meio.component';
import { NoticiasAtuaisComponent } from './components/newsletter/noticias-atuais/noticias-atuais.component';
import { SobreComponent } from './components/sobre/sobre.component';



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
    CabecalhoComponent,
    MeioComponent,
    FimComponent,
    NoticiasAtuaisComponent,
    SobreComponent,
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

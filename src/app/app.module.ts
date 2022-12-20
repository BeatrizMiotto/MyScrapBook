import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ConfiguracaoComponent } from './pages/configuracao/configuracao.component';
import { PainelComponent } from './pages/painel/painel.component';
import { LivroComponent } from './pages/livro/livro.component';
import { TemaComponent } from './pages/tema/tema.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PerfilComponent,
    ChatComponent,
    ConfiguracaoComponent,
    PainelComponent,
    LivroComponent,
    TemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

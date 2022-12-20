import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatComponent } from './pages/chat/chat.component';
import { ConfiguracaoComponent } from './pages/configuracao/configuracao.component';
import { HomeComponent } from './pages/home/home.component';
import { LivroComponent } from './pages/livro/livro.component';
import { LoginComponent } from './pages/login/login.component';
import { PainelComponent } from './pages/painel/painel.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { TemaComponent } from './pages/tema/tema.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'perfil', component: PerfilComponent},
  {path:'chat', component: ChatComponent},
  {path:'painel', component: PainelComponent},
  {path:'tema', component: TemaComponent},
  {path: 'livro', component: LivroComponent},
  {path:'configuracao', component: ConfiguracaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

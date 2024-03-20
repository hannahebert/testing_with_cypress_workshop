import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BingoBoardComponent } from './bingo-board/bingo-board.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    loadChildren: () => import('../app/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'bingo-board',
    component: BingoBoardComponent,
    loadChildren: () => import('../app/bingo.module').then((m) => m.BingoModule),
  },
];

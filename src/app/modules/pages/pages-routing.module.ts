import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: '404', pathMatch: 'full' },
      {
        path: 'about',
        component: AboutPageComponent,
      },
      {
        path: 'contact',
        component: ContactPageComponent,
      },
      {
        path: '404',
        component: NotFoundPageComponent,
      },
      { path: '**', redirectTo: '404', pathMatch: 'prefix' },
    ],
  },
  { path: '**', redirectTo: '404', pathMatch: 'prefix' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgMaterialModule } from './ng-material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderDefaultComponent } from './shared/widgets/header-default/header-default.component';
import { FooterDefaultComponent } from './shared/widgets/footer-default/footer-default.component';
import { PageSidenavComponent } from './shared/widgets/page-sidenav/page-sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDefaultComponent,
    FooterDefaultComponent,
    PageSidenavComponent,
  ],
  imports: [
    BrowserModule,
    NgMaterialModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

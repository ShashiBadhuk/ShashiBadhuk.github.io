import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgMaterialModule } from './ng-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderDefaultComponent } from './shared/widgets/header-default/header-default.component';
import { FooterDefaultComponent } from './shared/widgets/footer-default/footer-default.component';
import { PageSidenavComponent } from './shared/widgets/page-sidenav/page-sidenav.component';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderDefaultComponent,
    FooterDefaultComponent,
    PageSidenavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgMaterialModule,
    AppRoutingModule,
    NgxTypedJsModule,
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

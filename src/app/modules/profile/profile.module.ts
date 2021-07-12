import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxTypedJsModule } from 'ngx-typed-js';
import { NgMaterialModule } from './../../ng-material.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    NgMaterialModule,
    NgxTypedJsModule,
    ProfileRoutingModule,
  ],
})
export class ProfileModule {}

import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { FormsComponent } from '../../components/forms/forms.component';
import { TablesComponent } from '../../components/tables/tables.component';
import { CommonModule } from '@angular/common';
import{ NzTableModule } from "ng-zorro-antd";
import { NzDividerModule } from "ng-zorro-antd";
import { NgZorroAntdModule, NZ_ICONS } from "ng-zorro-antd";



@NgModule({
  imports: [WelcomeRoutingModule,CommonModule,NzTableModule,NzDividerModule,NgZorroAntdModule,],
  declarations: [WelcomeComponent,FormsComponent,TablesComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }

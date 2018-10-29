import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DynamicFormsCoreModule } from "@ng-dynamic-forms/core";

import { AppComponent } from './app.component';
import { ReportExportComponent } from './report-export/report-export.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormsKendoUIModule } from '@ng-dynamic-forms/ui-kendo';



@NgModule({
  declarations: [
    AppComponent,
    ReportExportComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsKendoUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

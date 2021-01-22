import { HttpClientModule } from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToolsModule } from 'projects/tools/src/public-api';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProgressTrackerComponent } from './progress-tracker';
import { WizardComponent } from './wizard';
import { WorkflowFormFieldHarvestComponent } from './workflow-form-field-harvest';

@NgModule({
  declarations: [
    AppComponent,
    ProgressTrackerComponent,
    WizardComponent,
    WorkflowFormFieldHarvestComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToolsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

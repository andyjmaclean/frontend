import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//import { DataPollingComponent } from './data-polling';

import { ToolsComponent } from './tools.component';
import { FileUploadComponent } from './file-upload';

@NgModule({
  declarations: [
    FileUploadComponent,
    ToolsComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    //DataPollingComponent,
    FileUploadComponent,
    ToolsComponent]
})
export class ToolsModule { }

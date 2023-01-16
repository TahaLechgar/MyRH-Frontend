import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { SharedModule } from '../shared';
import { JobsComponent } from './pages';
import { JobPostComponent, JobDescriptionComponent, TextViewerComponent } from './components';
import { QuillModule } from 'ngx-quill';



@NgModule({
  declarations: [
    JobsComponent,
    JobPostComponent,
    JobDescriptionComponent,
    TextViewerComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    SharedModule,
    QuillModule.forRoot()
  ]
})
export class JobModule { }

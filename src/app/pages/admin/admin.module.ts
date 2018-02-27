import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from './../../core/core.module';
import { AdminComponent } from './admin.component';
import { ADMIN_ROUTES } from './admin.routes';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventFormComponent } from './event-form/event-form.component';
import { DeleteEventComponent } from './update-event/delete-event/delete-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(ADMIN_ROUTES)
  ],
  declarations: [
    AdminComponent,
    CreateEventComponent,
    UpdateEventComponent,
    EventFormComponent,
    DeleteEventComponent
  ]
})
export class AdminModule { }
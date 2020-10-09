import { ClientPanelRoutingModule } from './client-panel-routing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientPanelComponent } from './client-panel.component';
import { ClientPanelNotificationComponent } from './client-panel-notification/client-panel-notification.component';
import { ClientPanelFiltersComponent } from './client-panel-filters/client-panel-filters.component';

@NgModule({
  declarations: [
    ClientPanelComponent,
    ClientPanelNotificationComponent,
    ClientPanelFiltersComponent
  ],
  imports: [
    CommonModule,
    ClientPanelRoutingModule
  ]
})
export class ClientPanelModule { }

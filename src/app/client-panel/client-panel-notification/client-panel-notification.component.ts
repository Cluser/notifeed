import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { INotification } from 'src/app/shared/models/inotification';

@Component({
  selector: 'app-client-panel-notification',
  templateUrl: './client-panel-notification.component.html',
  styleUrls: ['./client-panel-notification.component.scss']
})
export class ClientPanelNotificationComponent implements OnInit {

  @Input() notification: INotification;

  constructor() { }

  ngOnInit() {

  }
}

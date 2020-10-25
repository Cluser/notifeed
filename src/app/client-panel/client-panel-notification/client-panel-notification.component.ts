import { Component, OnInit, Input } from '@angular/core';
import { INotification } from '../../shared/models/inotification';

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

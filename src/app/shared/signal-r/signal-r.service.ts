import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';

@Injectable({
  providedIn: 'root'
})

export class SignalRService {

  constructor() {}

  public hubConnection: signalR.HubConnection;

  public startConnection()  {
    this.hubConnection = new signalR.HubConnectionBuilder()
                          .withUrl('https://localhost:6103')
                          .configureLogging(signalR.LogLevel.Information)
                          .build();

    this.hubConnection
      .start()
      .then(() => console.log('SignalR connection started'))
      .catch(err => console.log('Error while starting SignalR connection: ' + err));
  }

  public stopConnection() {
    this.hubConnection
      .stop()
      .then(() => console.log('SignalR connection stopped'))
      .catch((err) => console.log('Error while stopping SignalR connection: ' + err));
  }
}

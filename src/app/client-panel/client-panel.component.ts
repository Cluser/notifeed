import { Component, OnInit } from '@angular/core';
import { INotification } from '../shared/models/inotification';
import { SignalRService } from '../shared/signal-r/signal-r.service';

@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.scss']
})
export class ClientPanelComponent implements OnInit {

  public notifications: INotification[] = [
    {
      device: 'XS-247',
      type: 'Ostrzeżenie',
      description: 'Temperatura szafy sterowniczej zbliża się do niebezpiecznego progu 50°',
      color: '#FEFB00',
      date: '22.01.2020',
      time: '16:05'
    },
    {
      device: 'XS-247',
      type: 'Alarm',
      description: 'Temperatura szafy sterowniczej osiągnęła maksymalny próg 50°',
      color: '#F31C1C',
      date: '23.02.2020',
      time: '13:14'
    },
    {
      device: 'XS-247',
      type: 'Ostrzeżenie',
      description: 'Temperatura szafy sterowniczej zbliża się do niebezpiecznego progu 50°',
      color: '#FEFB00',
      date: '22.01.2020',
      time: '11:32'
    },
    {
      device: 'XS-247',
      type: 'Wznowiono pracę',
      description: 'Powrócono do produkcji w trybie automatycznym',
      color: '#17FA06',
      date: '22.01.2020',
      time: '09:45'
    },
    {
      device: 'XS-247',
      type: 'Brak materiału',
      description: 'Brak obejm',
      color: '#01D4E0',
      date: '22.01.2020',
      time: '09:11'
    },
    {
      device: 'XS-247',
      type: 'Ostrzeżenie',
      description: 'Temperatura szafy sterowniczej zbliża się do niebezpiecznego progu 50°',
      color: '#FEFB00',
      date: '22.01.2020',
      time: '07:37'
    }
  ];

  public filters: object = {
    type: [
      {name: 'Awaria', value: true},
      {name: 'Ostrzeżenie', value: false},
      {name: 'Brak materiału', value: true},
      {name: 'Wznowiono pracę', value: true}
    ],
    status: [
      {name: 'Nowy', value: true},
      {name: 'Przyjęty', value: false},
      {name: 'Zakończony', value: true}
    ],
    device: [
      {name: 'XS-247', value: true},
      {name: 'XS-785', value: false},
      {name: 'XS-222', value: false}
    ]
  };

  constructor(private signalRService: SignalRService) { }

  ngOnInit() {
    setInterval(() => this.signalRService.startConnection(), 5000);
  }

}

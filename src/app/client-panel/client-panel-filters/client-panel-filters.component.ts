import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-panel-filters',
  templateUrl: './client-panel-filters.component.html',
  styleUrls: ['./client-panel-filters.component.scss']
})
export class ClientPanelFiltersComponent implements OnInit {

  @Input() filters: object;

  constructor() { }

  ngOnInit() {
  }

}

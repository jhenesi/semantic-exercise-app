import { Component, OnInit } from '@angular/core';
import { ElementService } from 'src/app/core/element/element.service';
import { PeriodicElement } from 'src/app/core/models/PeriodicElement';

@Component({
  selector: 'app-secured',
  templateUrl: './secured.component.html',
  styleUrls: ['./secured.component.css']
})
export class SecuredComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[];

  constructor(private elementService: ElementService) { }

  ngOnInit() {
    this.elementService.getElements().subscribe(elements => this.dataSource = elements);
  }

}

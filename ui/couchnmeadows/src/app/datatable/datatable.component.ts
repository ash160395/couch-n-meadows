import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DatatableDataSource } from './datatable.datasource';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: DatatableDataSource ;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns= ['content', 'no_hours_week_planned', 'no_hours_week_achieved', 'no_hours_month_planned','no_hours_month_achieved', ];

  ngOnInit() {
    this.dataSource = new DatatableDataSource(this.paginator , this.sort);
  }

}

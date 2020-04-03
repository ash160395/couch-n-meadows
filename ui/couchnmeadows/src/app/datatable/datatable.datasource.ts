import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MasterDataItem } from '../model/MasterDataItem';

// TODO: replace this with real data 
const EXAMPLE_DATA: MasterDataItem[] = [
  {

  content: 'Spring Boot',
  no_hours_week_planned: 4,
  no_hours_week_achieved: 4,
  no_hours_month_planned: 18,
  no_hours_month_achieved: 12
  },
  {
  content: 'Kafka',
  no_hours_week_planned: 4,
  no_hours_week_achieved: 3,
  no_hours_month_planned: 16,
  no_hours_month_achieved: 6
  },
  {
  content: 'Angular',
  no_hours_week_planned: 4,
  no_hours_week_achieved: 4,
  no_hours_month_planned: 12,
  no_hours_month_achieved: 7
  },
  {
  content: 'Microservices',
  no_hours_week_planned: 3,
  no_hours_week_achieved: 1,
  no_hours_month_planned: 18,
  no_hours_month_achieved: 12
  },
];

/**
 * Data source for the Datatable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DatatableDataSource extends DataSource<MasterDataItem> {
  data: MasterDataItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<MasterDataItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: MasterDataItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: MasterDataItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'content': return compare(a.content, b.content, isAsc);
        case 'no_hours_week_planned': return compare(+a.no_hours_week_planned, +b.no_hours_week_planned, isAsc);
        case 'no_hours_week_achieved': return compare(+a.no_hours_week_achieved, +b.no_hours_week_achieved, isAsc);
        case 'no_hours_month_planned': return compare(+a.no_hours_month_planned, +b.no_hours_month_planned, isAsc);
        case 'no_hours_month_achieved': return compare(+a.no_hours_month_achieved, +b.no_hours_month_achieved, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
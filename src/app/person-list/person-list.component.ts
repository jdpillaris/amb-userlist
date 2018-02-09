import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from '../person';
import { PERSONS } from '../mock-persons';
import { AuthService } from '../auth.service';
import { MatTableDataSource, MatSort, Sort, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  constructor(private authStatus:AuthService) {
    if (AuthService) {
    }
  }
  displayedColumns = ['select', 'firstname', 'lastname', 'country', 'birthdate', 'iscomplete'];
  persons = PERSONS;
  dataSource = new MatTableDataSource(PERSONS);
  selection = new SelectionModel(true, []);

  ngOnInit() {
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

}

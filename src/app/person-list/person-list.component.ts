import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from '../person';
import { PERSONS } from '../mock-persons';
import { AuthService } from '../auth.service';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';

import { PersonDialogComponent } from '../person-dialog/person-dialog.component';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  constructor(private authStatus:AuthService, public dialog: MatDialog) {
    if (AuthService) {
    }
  }
  displayedColumns = ['select', 'firstname', 'lastname', 'country', 'birthdate',
  'iscomplete', 'action'];
  persons = PERSONS;
  dataSource = new MatTableDataSource(PERSONS);
  selection = new SelectionModel(true, []);

  ngOnInit() {
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  /**
   * Set the sort after the view init since this component will
   * be able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
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

  openDialog(person: Person) {
    let dialogRef = this.dialog.open(PersonDialogComponent, {
      width: '600px',
      data: person

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  hasCompleteInfo(person: Person) {
    if (person.firstname && person.lastname && person.birthdate && person.country
      && person.phonenumber)
      return "Complete";
    return "Incomplete";
  }
}

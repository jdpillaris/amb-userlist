import { Component, OnInit, Inject, Input } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { Person } from '../person';

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.css']
})
export class PersonDialogComponent implements OnInit {
  @Input() person: Person;

  constructor(public thisDialogRef: MatDialogRef<PersonDialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close('');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }

  getFullName(person: Person) {
    return person.firstname + " " + person.lastname;
  }

}

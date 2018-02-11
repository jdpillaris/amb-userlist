import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatIconModule, MatDialogModule } from '@angular/material';

@NgModule({
    // declarations: [MatSort],
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatIconModule, MatDialogModule],
    exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatIconModule, MatDialogModule],
})

export class MaterialModule { }
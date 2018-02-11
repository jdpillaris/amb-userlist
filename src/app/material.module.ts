import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatIconModule, MatDialogModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatIconModule, MatDialogModule],
    exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatIconModule, MatDialogModule],
})

export class MaterialModule { }
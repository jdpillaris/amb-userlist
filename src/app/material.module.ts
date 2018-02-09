import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatIconModule } from '@angular/material';

@NgModule({
    // declarations: [MatSort],
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatIconModule],
    exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatIconModule],
})

export class MaterialModule { }
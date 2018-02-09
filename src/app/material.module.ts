import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCheckboxModule } from '@angular/material';

@NgModule({
    // declarations: [MatSort],
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCheckboxModule],
    exports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCheckboxModule],
})

export class MaterialModule { }
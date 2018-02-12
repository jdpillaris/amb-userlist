import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule, MatGridListModule,
    MatSidenavModule, MatTableModule, MatCheckboxModule, MatPaginatorModule, MatIconModule,
    MatDialogModule } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
        MatGridListModule, MatSidenavModule, MatTableModule, MatCheckboxModule, MatPaginatorModule,
        MatIconModule, MatDialogModule],
    exports: [MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatToolbarModule,
        MatGridListModule, MatSidenavModule, MatTableModule, MatCheckboxModule, MatPaginatorModule,
        MatIconModule, MatDialogModule],
})

export class MaterialModule { }
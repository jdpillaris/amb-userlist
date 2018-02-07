import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatLabel } from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatFormFieldModule, MatInputModule],
    exports: [MatButtonModule, MatFormFieldModule, MatInputModule],
})

export class MaterialModule { }
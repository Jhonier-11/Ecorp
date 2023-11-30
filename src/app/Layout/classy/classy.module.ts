import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';







import { SearchModule } from 'app/layout/common/search/search.module';



import { ClassyLayoutComponent } from 'app/layout/layouts/vertical/classy/classy.component';

@NgModule({
    imports: [
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
    SearchModule,
    ClassyLayoutComponent
],
    exports: [
        ClassyLayoutComponent
    ]
})
export class ClassyLayoutModule
{
}

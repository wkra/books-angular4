import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksService } from './books.service';
import { FilterPipe } from './filter.pipe';
import { UserComponent } from './user/user.component';
import { DataService } from './services/data.service';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {path: '', component: UserComponent},
  {path: 'about', component: AboutComponent},
  {path: 'books', component: BooksListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    FilterPipe,
    UserComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    BooksService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

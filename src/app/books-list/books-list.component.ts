import { Component, OnInit } from '@angular/core';

import { BooksService } from '../books.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  private books: Book[] = [];
  private sort: string = "";

  constructor(private booksService: BooksService){
    this.books = this.booksService.getBooks();
}

  ngOnInit() {
  }

  onSortId(){
    if (this.sort !== 'id'){
      this.books.sort((a,b) => a.id - b.id);
      this.sort = 'id';
    } else {
      this.books.sort((a,b) => b.id - a.id);
      this.sort = "";
    }
  }

  onSortFirstName(){
    if (this.sort !== 'first_name'){
      this.books.sort((a,b) => a.first_name.localeCompare(b.first_name));
      this.sort = 'first_name';
    } else {
      this.books.sort((a,b) => b.first_name.localeCompare(a.first_name));
      this.sort = "";
    }
  }
  onSortLastName(){
    if (this.sort !== 'last_name'){
      this.books.sort((a,b) => a.last_name.localeCompare(b.last_name));
      this.sort = 'last_name';
    } else {
      this.books.sort((a,b) => b.last_name.localeCompare(a.last_name));
      this.sort = "";
    }
  }
  onSortTitle(){
    if (this.sort !== 'title'){
      this.books.sort((a,b) => a.title.localeCompare(b.title));
      this.sort = 'title';
    } else {
      this.books.sort((a,b) => b.title.localeCompare(a.title));
      this.sort = "";
    }
  }
  onSortPublisher(){
    if (this.sort !== 'publisher'){
      this.books.sort((a,b) => a.publisher.localeCompare(b.publisher));
      this.sort = 'publisher';
    } else {
      this.books.sort((a,b) => b.publisher.localeCompare(a.publisher));
      this.sort = "";
    }
  }
  onSortEdition(){
    if (this.sort !== 'edition'){
      this.books.sort((a,b) => a.edition.localeCompare(b.edition));
      this.sort = 'edition';
    } else {
      this.books.sort((a,b) => b.edition.localeCompare(a.edition));
      this.sort = "";
    }
  }
  onSortYear(){
    if (this.sort !== 'year'){
      this.books.sort((a,b) => a.year.localeCompare(b.year));
      this.sort = 'year';
    } else {
      this.books.sort((a,b) => b.year.localeCompare(a.year));
      this.sort = "";
    }
  }

}

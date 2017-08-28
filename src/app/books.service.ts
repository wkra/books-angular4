import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { Book } from './book.model';

@Injectable()

export class BooksService {

  private baseUrl = 'http://localhost/angular4/books/src/php/selectbooks.php';
  // private baseUrl = 'http://localhost:4200/php/selectbooks.php';
  // private baseUrl = '../php/selectbooks.php';
  private books: Book[] = [];

  constructor(private http: Http) { }

  getBooks(){
    this.http.get(this.baseUrl)
              .toPromise()
              .then(response => this.convert(response.json()));
    return this.books;
  }

  private convert(res){

    for (var i = 0; i < res.length; i++){
      this.books.push(new Book(res[i][0],
                      res[i][1],
                      res[i][2],
                      res[i][3],
                      res[i][4],
                      res[i][5],
                      res[i][6]))
    }
  }

}

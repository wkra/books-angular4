export class Book {
  public id: number;
  public first_name: string;
  public last_name: string;
  public title: string;
  public publisher: string;
  public edition: string;
  public year: string;

  constructor(id: number,
              first_name: string,
              last_name: string,
              title: string,
              publisher: string,
              edition: string,
              year: string){
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.title = title;
    this.publisher = publisher;
    this.edition = edition;
    this.year = year;
  }
}

import { Component } from '@angular/core';
import { Book } from '../Book';
import { LibraryServices } from '../library-services';  
@Component({
  selector: 'app-catalogue',
  standalone: false,
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.css',
})
export class Catalogue {
  bookList:Book[] = [];

  constructor(private libraryService: LibraryServices) {
    
  }
  ngOnInit() {
    this.bookList = this.libraryService.getBooks();
  }
}

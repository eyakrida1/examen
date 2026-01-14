import { Component, inject } from '@angular/core';
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { BookService } from '../../services/book-service';
@Component({
  selector: 'app-search-bar',
  imports: [FontAwesomeModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {
faMagnifyingGlass=faMagnifyingGlass
bookService=inject(BookService)

// updateBookList(title:String){
//     this.bookService.getBooks().subscribe(
//       Response=>this.bookService.bookList=Response.filter(
//         book=>book.title.toUpperCase().includes(title.toUpperCase())
//       )
//     )
//   }


updateBookListSingleInput(query: string) {
  const trimmedQuery = query.trim();
  this.bookService.getBooks().subscribe((response: any[]) => {
    this.bookService.bookList = response.filter(book => {
      if (!trimmedQuery) return true; // si rien n'est tapé, afficher tout
      const isNumber = !isNaN(+trimmedQuery); // vrai si c'est un nombre
      if (isNumber) {
        // recherche par année
        return book.first_publish_year === +trimmedQuery;
      } else {
        // recherche par titre
        return book.title.toUpperCase().includes(trimmedQuery.toUpperCase());
      }
    });
  });
}


  

}

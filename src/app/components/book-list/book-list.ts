import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../../services/book-service';
import { Book } from '../../interfaces/Book.ts';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book-list',
  imports: [FontAwesomeModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css',
})
export class BookList implements OnInit {
  faHeart=faHeart

  bookService=inject(BookService)
  bookList:Book[]=[]
  router=inject(Router)


  ngOnInit(): void {
  this.bookService.getBooks().subscribe(
    (response: any[]) => {
      console.log('Réponse complète de l’API :', response);
      this.bookService.bookList = response;
    }
  );
}


  isInWishList(bookId: string): boolean {
  return this.bookService.wishList.some(m => m.key === bookId);
}

  navigateTo(id:string){
    this.router.navigate(['book', id]);
  }

}

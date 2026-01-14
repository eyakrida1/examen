import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../interfaces/Book.ts';
import { BookService } from '../../services/book-service';
import { DatePipe,CommonModule } from '@angular/common';
@Component({
  selector: 'app-book-card',
  imports: [DatePipe,CommonModule],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css',
})
export class BookCard {
  route=inject(ActivatedRoute)
  bookService=inject(BookService)

  bookKey:string=''
  book:Book|null=null
  buttonDisabled:boolean=false

  ngOnInit(): void {
      this.bookKey=this.route.snapshot.params['key']
      if(this.bookService.wishList.find(book=>book.key==this.bookKey))
        this.buttonDisabled=true
       this.bookService.getBookById(this.bookKey).subscribe(
        Response=>this.book=Response
      )
    console.log('Book key from URL:', this.bookKey);}



      buttonStates: { [bookKey: string]: { wishList: boolean, luList: boolean } } = {};

      addToWishList(book: Book) {
  // Vérifie si le livre est déjà dans la wishlist
  if (!this.bookService.wishList.some(b => b.key === book.key)) {
    this.bookService.wishList.push(book);
    this.buttonStates[book.key].wishList = true; // désactive seulement ce bouton
  }
}

addToLuList(book: Book) {
  // Vérifie si le livre est déjà dans luList
  if (!this.bookService.LuList.some(b => b.key === book.key)) {
    this.bookService.LuList.push(book);
    this.buttonStates[book.key].luList = true; // désactive seulement ce bouton
  }
}
}

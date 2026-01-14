import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../services/book-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { NgStyle } from "@angular/common";
@Component({
  selector: 'app-head-bar',
  imports: [FontAwesomeModule, NgStyle],
  templateUrl: './head-bar.html',
  styleUrl: './head-bar.css',
})
export class HeadBar {
faHeart = faHeart;
route=inject(Router)
bookService=inject(BookService)

navigateToWishList(){
this.route.navigate(['wishlist'])
}

navigateToLuList(){
this.route.navigate(['lulist'])
}

setHeartStyle(){
    if(this.bookService.wishList.length)
      return {'color':'red'}
    else
      return
  }
}

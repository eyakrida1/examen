import { Routes } from '@angular/router';
import { BookList } from './components/book-list/book-list';
import { LuList } from './components/lu-list/lu-list';
import { WishList } from './components/wish-list/wish-list';
import { BookCard } from './components/book-card/book-card';

export const routes: Routes = [

    {path:'', component:BookList},
     {path:'wishlist', component:WishList},
    {path:'lulist', component:LuList},
    { path: 'book/:key', component: BookCard},
    {path:'**', component:BookList}
];

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LessonTextInterpolationComponent } from './lesson-text-interpolation/lesson-text-interpolation.component';
import { ListFriendsComponent } from './list-friends/list-friends.component';

export const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'lesson-text-interpolation', component: LessonTextInterpolationComponent },
    { path: 'list-friends', component: ListFriendsComponent },
    //lazy loading
    { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) },
];

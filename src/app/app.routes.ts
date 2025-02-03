import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LessonTextInterpolationComponent } from './lesson-text-interpolation/lesson-text-interpolation.component';


export const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'lesson-text-interpolation', component: LessonTextInterpolationComponent },
    // { path: 'list-friends', component: ListFriendsComponent },
    { path: 'list-friends', loadComponent: () => import('./list-friends/list-friends.component').then(m => m.ListFriendsComponent) },
    //lazy loading
    { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) },
];

import { ParentFormDataComponent } from './parent-form-data/parent-form-data.component';
import { ParentComponent } from './parent/parent.component';
import { TpBindingComponent } from './tp-binding/tp-binding.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LessonTextInterpolationComponent } from './lesson-text-interpolation/lesson-text-interpolation.component';


export const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'lesson-text-interpolation', component: LessonTextInterpolationComponent },
    // { path: 'list-friends', component: ListFriendsComponent },exercice-control-center
    { path: 'list-friends', loadComponent: () => import('./list-friends/list-friends.component').then(m => m.ListFriendsComponent) },
    { path: 'app-tp-binding', loadComponent: () => import('./tp-binding/tp-binding.component').then(m => m.TpBindingComponent) },
    { path: 'app-parent', loadComponent: () => import('./parent/parent.component').then(m => m.ParentComponent) },
    { path: 'exercice-control-center', loadComponent: () => import('./exercice-control-center-parent/exercice-control-center-parent.component').then(m => m.ExerciceControlCenterParentComponent) },
    { path: 'form-user', loadComponent: () => import('./parent-form-data/parent-form-data.component').then(m => m.ParentFormDataComponent) },
    //lazy loading
    //lazy loadingsrc\app\exercice-control-center-parent\exercice-control-center-parent.component
    { path: '**', loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent) },
];

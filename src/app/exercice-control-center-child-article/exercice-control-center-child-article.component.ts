import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exercice-control-center-child-article',
  imports: [FormsModule],
  templateUrl: './exercice-control-center-child-article.component.html',
  styleUrl: './exercice-control-center-child-article.component.css'
})
export class ExerciceControlCenterChildArticleComponent {
  titleArticle: string = '';
  
}
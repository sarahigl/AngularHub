import { Component, Input, Output, EventEmitter } from '@angular/core';
interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  type: string;
}
@Component({
  selector: 'app-exercice-control-center-child',
  imports: [],
  templateUrl: './exercice-control-center-child.component.html',
  styleUrl: './exercice-control-center-child.component.css'
})

export class ExerciceControlCenterChildComponent {

  @Input() article!: Article;
  // @Input() contentArticle!: string;
}

import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  date: Date;
  type: string;
}
@Component({
  selector: 'app-exercice-control-center-child-article',
  imports: [FormsModule],
  templateUrl: './exercice-control-center-child-article.component.html',
  styleUrl: './exercice-control-center-child-article.component.css'
})
export class ExerciceControlCenterChildArticleComponent {
  newAuthor: string = "";
  newTitle: string = "";
  newContent: string = "";
  newArticle: Article = {
    id: 0,
    title: this.newTitle,
    content: this.newContent,
    author: this.newAuthor,
    date: new Date(Date.now()), 
    type: 'article'
  }
  newBrouillon: Article = {
    id: 0,
    title: this.newTitle,
    content: this.newContent,
    author: this.newAuthor,
    date: new Date(Date.now()), 
    type: 'brouillon'
  }
  @Output() articleCreated = new EventEmitter<Article>();
  @Output() brouillonCreated = new EventEmitter<Article>();

  addArticle() {
    this.newArticle.author = this.newAuthor;
    this.newArticle.title = this.newTitle;
    this.newArticle.content = this.newContent;
    this.articleCreated.emit(this.newArticle);
    this.newAuthor = "";
    this.newTitle = "";
    this.newContent = "";
  }
  addBrouillon() {
    this.newArticle.author = this.newAuthor;
    this.newBrouillon.title = this.newTitle;
    this.newBrouillon.content = this.newContent;
    this.brouillonCreated.emit(this.newBrouillon);
    this.newAuthor = "";
    this.newTitle = "";
    this.newContent = "";
  }
}
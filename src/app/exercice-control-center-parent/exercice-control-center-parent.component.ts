import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { ExerciceControlCenterChildComponent } from '../exercice-control-center-child/exercice-control-center-child.component';
import { ExerciceControlCenterChildArticleComponent } from '../exercice-control-center-child-article/exercice-control-center-child-article.component';

interface Article {
    id: number;
    title: string;
    content: string;
    author: string;
    date: Date;
    type: string;
  }
@Component({
  selector: 'app-exercice-control-center-parent',
  imports: [CommonModule, NgFor, ExerciceControlCenterChildArticleComponent,ExerciceControlCenterChildComponent],
  templateUrl: './exercice-control-center-parent.component.html',
  styleUrl: './exercice-control-center-parent.component.css'
})

export class ExerciceControlCenterParentComponent {
  titleArticle: string = 'Ici le parent balance des infos intra ENFANT';
  articles: Article[] = [
    {
      id: 1,
      title: 'Mon premier article',
      content: 'Ceci est le contenu de mon premier article.',
      author: 'Auteur 1',
      date: new Date('2023-01-01'),
      type: 'article'
    },
    {
      id: 2,
      title: 'Mon deuxième article',
      content: 'Ceci est le contenu de mon deuxième article.',
      author: 'Auteur 2',
      date: new Date('2023-02-01'),
      type: 'brouillon'
    }
  ]

  onArticleAd(articleData: { title: string; content: string; author: string; date: Date; type: string }) {
    this.articles.push({
      id: this.articles[this.articles.length - 1].id + 1,
      title: articleData.title,
      content: articleData.content,
      author: articleData.author,
      date: articleData.date,
      type: articleData.type
    })
    console.log(articleData);
  }

  onBrouillonAd(brouillonData: { title: string; content: string; author: string; date: Date; type: string }) {
    this.articles.push({
      id: this.articles[this.articles.length - 1].id + 1,
      title: brouillonData.title,
      content: brouillonData.content,
      author: brouillonData.author,
      date: brouillonData.date,
      type: brouillonData.type
    })
    console.log(brouillonData);
  }
}
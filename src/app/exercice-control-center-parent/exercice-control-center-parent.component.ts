import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { ExerciceControlCenterChildComponent } from '../exercice-control-center-child/exercice-control-center-child.component';
import { ExerciceControlCenterChildArticleComponent } from '../exercice-control-center-child-article/exercice-control-center-child-article.component';

@Component({
  selector: 'app-exercice-control-center-parent',
  imports: [CommonModule, NgFor, ExerciceControlCenterChildArticleComponent,ExerciceControlCenterChildComponent],
  templateUrl: './exercice-control-center-parent.component.html',
  styleUrl: './exercice-control-center-parent.component.css'
})
export class ExerciceControlCenterParentComponent {
  titleArticle: string = 'Ici le parent balance des infos intra ENFANT';
}
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-exercice-control-center-child',
  imports: [],
  templateUrl: './exercice-control-center-child.component.html',
  styleUrl: './exercice-control-center-child.component.css'
})
export class ExerciceControlCenterChildComponent {

  @Input() titleArticle!: string;
  // @Input() contentArticle!: string;
}

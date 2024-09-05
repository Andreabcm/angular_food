import { Component, input, Input, Signal } from '@angular/core';
import { Food } from '../../../shared/models/Food';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
 //@Input() foods!:Food[];
 @Input() foods! :Signal<Food[]>;
 //foods=input<Food[]>();
}

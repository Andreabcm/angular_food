import { Component, inject } from '@angular/core';
import { FoodService } from '../../services/food.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  private foodService = inject(FoodService);
  text= this.foodService.text;

  search(event:KeyboardEvent){
    const inputEvent = event.target as HTMLInputElement;
    this.text.update(v=> inputEvent.value)
  }
}

import { Component, inject } from '@angular/core';
import { FoodService } from '../shared/services/food.service';
import { JsonPipe } from '@angular/common';
import { ListComponent } from './components/list/list.component';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [JsonPipe, ListComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.css'
})
export class FoodComponent {
    private foodService=inject(FoodService);

    foods=this.foodService.filterArray;
}

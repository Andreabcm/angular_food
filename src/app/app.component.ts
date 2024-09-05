import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodComponent } from "./food/food.component";
import { SearchComponent } from "./shared/components/search/search.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FoodComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-test';
}

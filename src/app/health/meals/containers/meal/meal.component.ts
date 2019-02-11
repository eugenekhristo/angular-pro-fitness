import { Component, OnInit } from '@angular/core';

// model
import { Meal } from 'src/app/health/shared/services/meals/meals.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addMeal(meal: Meal): void {
    console.log(meal);
  }
}

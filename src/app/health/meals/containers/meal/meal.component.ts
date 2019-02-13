import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// model
import { Meal, MealsService } from 'src/app/health/shared/services/meals/meals.service';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {

  constructor(private router: Router, private mealsService: MealsService) { }

  ngOnInit() {
  }

  async addMeal(meal: Meal) {
    await this.mealsService.addMeal(meal);
    this.router.navigate(['meals']);
  }
}

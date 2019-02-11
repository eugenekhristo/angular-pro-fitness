import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Meal } from 'src/app/health/shared/services/meals/meals.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-meal-form',
  templateUrl: './meal-form.component.html',
  styleUrls: ['./meal-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealFormComponent implements OnInit {
  @Output() create = new EventEmitter<Meal>();

  ingredients: FormArray = this.fb.array(['']);

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    ingredients: this.ingredients
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // console.log(this.ingredients);
  }

  get required() {
    return (
      this.form.get('name').hasError('required') &&
      this.form.get('name').touched
    );
  }

  addIngredient(): void {
    const control = this.fb.control(['']);
    this.ingredients.push(control);
  }

  removeIngredient(i: number) {
    this.ingredients.removeAt(i);
  }

  createMeal() {
    if (this.form.invalid) {
      this.form.get('name').markAsTouched();
    } else {
      this.create.emit(this.form.value);
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }
}

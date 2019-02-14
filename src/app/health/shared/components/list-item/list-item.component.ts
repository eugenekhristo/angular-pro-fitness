import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
// models
import { Meal } from '../../services/meals/meals.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent implements OnInit {
  @Input() item: Meal;
  @Output() remove = new EventEmitter<Meal>();
  // for UI
  toggled = false;

  constructor() { }

  ngOnInit() {}

  getRoute(item: any) {
    return [`/meals/${this.item.key}`];
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  toggle() {
    this.toggled = !this.toggled;
  }
}

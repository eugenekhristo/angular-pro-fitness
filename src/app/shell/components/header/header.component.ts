import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from 'src/app/auth/shared/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  @Input() user: User;
  @Output() logout = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  logoutUser() {
    this.logout.emit();
  }

}

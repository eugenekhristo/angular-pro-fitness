import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {
  @Output() submitted = new EventEmitter<FormGroup>();

  form = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  get emailControl() {
    return this.form.get('email');
  }

  get passwordControl() {
    return this.form.get('password');
  }

  get passwordInvalid() {
    const passControl = this.passwordControl;
    return passControl.hasError('required') && passControl.touched;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted.emit(this.form);
    } else {
      this.emailControl.markAsTouched();
      this.passwordControl.markAsTouched();
    }
  }
}

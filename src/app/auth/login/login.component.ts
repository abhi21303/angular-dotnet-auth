import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { provideRouter, Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule,SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.apiService.Login(this.loginForm.value).subscribe({
        next: (res) => {
          localStorage.setItem('authToken', res.token);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          alert('Login failed. Please check your credentials.');
        }
    });
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loginSuccess = new EventEmitter<string>();

  form: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder) { 
    this.form = this.fb.group({
      username: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    this.authService.login(this.form.value).subscribe(usuario => {
      sessionStorage.setItem('token', usuario.token);
      this.loginSuccess.emit('success');
    });
  }

}

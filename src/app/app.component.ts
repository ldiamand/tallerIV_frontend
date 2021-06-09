import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { PersonaService } from 'src/app/persona.service';
import { AuthService } from './auth.service';
import { Persona } from './persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  logeado: string;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {

  }

  login(event: string) {
    this.logeado = event;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { PersonaService } from 'src/app/persona.service';
import { Persona } from './persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  personas: Persona[];
  form: FormGroup;
  constructor(private servicio: PersonaService, private fb: FormBuilder) { 
    this.form = this.fb.group({
      nombre: [''],
      apellido: ['']
    });
  }

  ngOnInit() {
    this.servicio.getAllPersonas().subscribe(personas => {
      this.personas = personas;
    });
  }

  public submitForm() {
    this.servicio.save(this.form.value).subscribe(persona => {
      this.personas.push(persona);
    });
  }
}

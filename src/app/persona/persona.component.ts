import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

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

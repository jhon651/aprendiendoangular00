import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms'; '@angular/forms';

@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {
  formularioOne: FormGroup;

  constructor(private fb:FormBuilder ) {
    this.formularioOne = this.fb.group({
      nombre: ['Nombre por defecto', Validators.required],
      apellido: ['Apellido por defecto', Validators.required],
      email: ['ejemplo@gmail.com', [Validators.required, Validators.pattern("[^ @]*@[^ @]*") ]]
    });
   }

  ngOnInit(): void {
  }
  onSubmit(formularioOne: any){
    console.log(formularioOne)
  }
}

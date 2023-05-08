import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-add-edit',
  templateUrl: './cliente-add-edit.page.html',
  styleUrls: ['./cliente-add-edit.page.scss'],
})
export class ClienteAddEditPage implements OnInit {

  clienteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  nombre: string = "Anthony"; // esta leendo el formulario

  cliente = {
    nombre: "Anthony",  
    email: "thonyvtl@gmail.com", // esta leendo el formulario
  };


  ngOnInit() {
    this.clienteForm = this.formBuilder.group({

      //PARA EL NOMBRE
      nombre: ['',

      Validators.compose([

        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),

      ])],
      
      //PARA EMAIL
      email: ['',
      Validators.compose([
        Validators.required,
        Validators.email,

      ])
    ]



    });
  }

  submit() {
    console.log(this.nombre);
    this.nombre = "Hermenegildo"; // eveteno q se vera cuando haga clicl en button
    }

}

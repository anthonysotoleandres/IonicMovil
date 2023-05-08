import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-add-edit',
  templateUrl: './cliente-add-edit.page.html',
  styleUrls: ['./cliente-add-edit.page.scss'],
})
export class ClienteAddEditPage implements OnInit {

  constructor() { }

  nombre: string = "Anthony";
  ngOnInit() {
  }

  submit() {
    console.log(this.nombre);
    this.nombre = "Hermenegildo";
    }

}

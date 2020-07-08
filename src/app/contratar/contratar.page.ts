import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder  } from '@angular/forms';

@Component({
  selector: 'app-contratar',
  templateUrl: './contratar.page.html',
  styleUrls: ['./contratar.page.scss'],
})
export class ContratarPage implements OnInit {

  usuario = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    address: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.minLength(8)]],
    services: [[], [Validators.required, Validators.minLength(1)]],
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  } 

guardarDatos(){
 // console.log(this.usuario.value);
}

}

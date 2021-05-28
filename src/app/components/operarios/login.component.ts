import { Component, OnInit } from '@angular/core';
import { Operarios } from './operarios';
import swal from 'sweetalert2';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  titulo:string="Por favor inicie sesion!";
  operario:Operarios;

  constructor(private authService:AuthService , private router:Router) {
    this.operario = new Operarios();
  }

  ngOnInit(): void {



  }


  login():void{
    console.log(this.operario);
    if(this.operario.username == null || this.operario.password == null){
      swal('Error login','Username o password vacias!', 'error')
      return;
    }

    this.authService.login(this.operario).subscribe(response=>{
      console.log(response);

      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);

      let op  = this.authService.operario;
      this.router.navigate(['/fabrica']);
      swal('Login' ,`Hola ${op.username}, has iniciado sesion con exito` , 'success');


    }, err => {
      if(err.status ==400){
        swal('Error login' ,'Usuario o clave incorrecta!' , 'error');



      }

    }
  );
  }

}

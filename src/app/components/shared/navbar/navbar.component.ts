import {Component} from '@angular/core';
import { AuthService } from '../../operarios/auth.service';
import swal from 'sweetalert2';
import {Router} from '@angular/router';



@Component({
   selector: 'app-navbar',
   templateUrl: './navbar.component.html'
})

export class NavbarComponent{

// rolecito:Roles;

  constructor(public authService:AuthService , private router:Router){


  }

  logout():void{
    this.authService.logout();
    swal('Logout' , 'Cerraste sesión' , 'success');
    this.router.navigate(['/login']);

  }



}

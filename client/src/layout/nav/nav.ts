import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/core/account-service';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import { ToastService } from '../../core/services/toast-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  public accountService = inject(AccountService)
  protected creds: any = {}
  private router=inject(Router);
  private toast = inject(ToastService);
  //protected loggedIn = signal(false)

  login(){
    
    this.accountService.login(this.creds).subscribe({
      next: () => {
        //console.log(result);
        this.router.navigateByUrl('/members');
       // this.loggedIn.set(true);
        this.toast.success('Logged in successfully');
        this.creds={};
      },
      error : error => {
        console.log(error);
        this.toast.error(error.error);
      }
      
    })
  }

  logout(){
    //this.loggedIn.set(false);
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}

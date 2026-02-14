import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../../core/services/core/account-service';

@Component({
  selector: 'app-nav',
  imports: [FormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  public accountService = inject(AccountService)
  protected creds: any = {}
  //protected loggedIn = signal(false)

  login(){
    
    this.accountService.login(this.creds).subscribe({
      next: result => {
        console.log(result);
       // this.loggedIn.set(true);
        this.creds={};
      },
      error : error => alert(error.message)
      
    })
  }

  logout(){
    //this.loggedIn.set(false);
    this.accountService.logout();
  }
}

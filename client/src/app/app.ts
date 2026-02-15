import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Nav } from "../layout/nav/nav";
import { Home } from "../features/home/home";
import { User } from '../types/user';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Nav, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
 
  private http = inject(HttpClient);   //constructor(private http : HttpClient){}
  protected router =inject(Router);
  protected title = 'Dating App';
  protected members = signal<User[]>([])
  
  // ngOnInit(): void {
  //   this.http.get('https://localhost:5001/api/members').subscribe({
  //     next: response => this.members.set(response),
  //     error: error => console.log(error),
  //     complete : () => console.log('completed the http request')
  //   })
  // }

  


  
  
}

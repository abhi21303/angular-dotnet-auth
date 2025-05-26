import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  test:string = "";

  constructor(private apiService : ApiService){}

  ngOnInit(): void {
      this.FetchData();
  }

  FetchData():void{
    this.apiService.Test().subscribe({
      next: (response) => {
        this.test = response;
        console.log(response);
      },
      error:(err) => {
        this.test = 'got an error!';
        console.log(err);
      }
    });
  }

}

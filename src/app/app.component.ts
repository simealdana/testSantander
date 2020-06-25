import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateTimeObj;
  date: string | null =null;
  year: string | null = null;
  public time :string | null= null;
  public dateShow:boolean = false;

  constructor(private service: ApiService) {}

  ngOnInit() {

    this.getDateTime();
    // assign API response to dateTimeObj on loading of application
  }

  private getDateTime() {
    this.service.getDateTimeAPI().subscribe((res:any)=>{
      this.dateTimeObj = JSON.parse(res._body);
    },()=>{
      console.log('ERROR')
    });
  }

  public showDate(){
    this.dateShow = true;
    this.date = this.dateTimeObj.date;
  }

}

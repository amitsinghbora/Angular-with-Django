import { Component } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  data: any[] = []
  constructor(private cdRef: ChangeDetectorRef) { }

  fetch_data(){
    let xhr=new XMLHttpRequest();
    xhr.open('GET','http://127.0.0.1:8000/tasks/',true);
    xhr.onload=()=>{
      if(xhr.status==200){
        this.data=JSON.parse(xhr.responseText)
        this.cdRef.detectChanges();
        console.log(this.data)
      }
    }
    xhr.send()
  }
}

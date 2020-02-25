import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-installations',
  templateUrl: './installations.component.html',
  styleUrls: ['./installations.component.css']
})
export class InstallationsComponent implements OnInit {

  installations: any;

  constructor(private http: HttpClient) { 
    this.installations = [];
  }

  ngOnInit() {
    const url = 'http://localhost:9898/api/product';
    this.http.get(url).subscribe((res) => {
      this.installations = res;
      console.log(res);
    });
  }
}

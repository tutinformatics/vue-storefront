import {HttpClient} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

let httpClient = new HttpClient();

@inject(HttpClient)
export class ProductList {
  constructor(http) {
    this.products = [];
  }

  created() {
    httpClient.fetch('http://localhost:9898/api/product')
    .then(response => response.json())
    .then(data => {
      this.products = data;
      console.log(data);
    });
  }
}

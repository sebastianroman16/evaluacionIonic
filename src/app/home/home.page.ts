import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: { id: number; title: string; body: string }[] = [];
  constructor(
    private jsonplaceholderService: JsonplaceholderService
  ) { }
  ngOnInit() {
    const datos = localStorage.getItem('items');
    if (datos) {
      this.items = JSON.parse(datos);
      console.log('Datos de localStorage')
    } else {
      this.jsonplaceholderService.obtenerDatoss().subscribe(data => {
        this.items = data;
        localStorage.setItem('items', JSON.stringify(this.items));
      });
    }
  }
}
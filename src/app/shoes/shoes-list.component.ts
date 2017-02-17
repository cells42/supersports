import {Component, OnInit} from '@angular/core';
import { IShoes } from './shoes';
import { SHOESDATA } from '../shared/data';
import { DemoDataService} from '../shared/demo-data.service';

@Component({
  selector: 'shoes-list',
  templateUrl: './app/shoes/shoes-list.component.html'
})
export class ShoesListComponent implements OnInit{
  shoes: IShoes[];
  pagetitle: string;

  constructor(private demoDataService: DemoDataService){

  }

  ngOnInit() {
    this.shoes = this.demoDataService.getDemoData();
  }
  onInit(){
    this.shoes = SHOESDATA;
  }
  onRatingClicked(message: string): void{
    this.pagetitle = this.pagetitle + message;
  }
}

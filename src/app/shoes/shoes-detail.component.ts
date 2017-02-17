import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { IShoes } from './shoes';
import { DemoDataService} from '../shared/demo-data.service';

@Component({
  templateUrl: './app/shoes/shoes-detail.component.html',
  styleUrls: ['shoes-detail.component.css'],
})

export class ShoeDetailComponent{
  shoeid: number;
  shoes: IShoes;
  constructor(private  _route: ActivatedRoute, private _router: Router, private _demoDataService: DemoDataService){
  }

  ngOnInit(){
    this.shoeid = this._route.snapshot.params['id'];
    this.shoes = this._demoDataService.getDemoDataByID(this.shoeid)
  }
}

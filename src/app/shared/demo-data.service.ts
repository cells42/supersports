import { Injectable} from "@angular/core";
import {SHOESDATA} from './data';

@Injectable()

export class DemoDataService {
  getDemoData() {
    return SHOESDATA;
  }

  getDemoDataByID(shoeid: number){
    return SHOESDATA.find(r => r.id == shoeid);
  }
}

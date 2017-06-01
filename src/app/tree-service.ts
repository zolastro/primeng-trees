import {Injectable} from '@angular/core';
import { SynchService } from './synch.service';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class TreeService {

  constructor(private synchService: SynchService) {}

  getFiles() {
    return this.synchService.getItems();
  }


  update(data: any) {
    this.synchService.update(data);
  }
}


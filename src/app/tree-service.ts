import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import { Tree, TreeNode} from 'primeng/primeng';     //accordion and accordion tab
import { SynchService } from './synch.service';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class TreeService {

  constructor(private http: Http, private synchService: SynchService) {}

  getFiles() {
    return this.synchService.get  ()
      .toPromise()
      .then(res => <TreeNode[]> JSON.parse(res).value());
  }
}


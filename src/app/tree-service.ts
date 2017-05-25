import {Injectable} from "@angular/core";
import { Http } from '@angular/http';
import {Tree, TreeNode} from 'primeng/primeng';     //accordion and accordion tab

import 'rxjs/add/operator/toPromise';


@Injectable()
export class TreeService {

    constructor(private http: Http) {}

    getFiles() {
      return this.http.get('../assets/info.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }
}

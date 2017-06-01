import {Component, OnInit} from '@angular/core';
import {Tree, TreeNode} from 'primeng/primeng';     //accordion and accordion tab
import { TreeService } from './tree-service';
import {TreeDragDropService} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',  '../../node_modules/primeng/resources/primeng.min.css',
  '../../node_modules/primeng/resources/themes/omega/theme.css',
  '../../node_modules/font-awesome/css/font-awesome.min.css', ]
})
export class AppComponent implements OnInit{
  title = 'app works!';
  files: TreeNode[];
  selectedFile: TreeNode;

  constructor(private treeService: TreeService) {}

  ngOnInit() {
    this.treeService.getFiles().subscribe(
      res => {
        this.files = (<TreeNode[]>res);
      });
  }

}

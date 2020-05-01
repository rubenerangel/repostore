import { Component, OnInit } from '@angular/core';
import { GitRepoInfoService } from '../services/git-repo-info.service';

@Component({
  selector: 'app-user-repos',
  templateUrl: './user-repos.component.html',
  styleUrls: ['./user-repos.component.sass'],
})
export class UserReposComponent implements OnInit {
  constructor(public gitInfoService: GitRepoInfoService) {}

  ngOnInit(): void {
    //this.gitInfoService.info$.subscribe(console.log);
  }
}

import { Component } from '@angular/core';
import { GitRepoInfoService } from './services/git-repo-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'git-repos-user';

  constructor(private gitRepoInfoService: GitRepoInfoService) {}

  ngOnInit() {
    this.gitRepoInfoService.info$.subscribe(console.log);
  }
}

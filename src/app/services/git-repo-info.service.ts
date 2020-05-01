import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Infogit } from '../../structures/infogit.structure';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GitRepoInfoService {
  public infoSubject: Subject<any> = new Subject<any>();
  public info$: Observable<any>;

  endpoint: string = 'https://api.github.com/users/rubenerangel/repos';

  constructor(public http: HttpClient) {
    this.info$ = this.infoSubject.asObservable().pipe(map(this.structureData));

    this.get();
  }

  get() {
    let url = this.endpoint;

    this.http.get(url).subscribe(this.infoSubject);
  }

  structureData(data: any) {
    let repos = {};
    data.forEach((repository) => {
      //console.log(repository, 'repository');
      let id = repository.id;

      let reposUser: Infogit = repos[id] || {
        repos: {},
      };

      reposUser.id = repository.id;
      reposUser.name = repository.name;
      reposUser.full_name = repository.full_name;
      reposUser.is_private = repository.private;
      reposUser.created_at = repository.created_at;

      repos[id] = reposUser;
      // console.log(repos[id], 'repos[id]');
    });
    return Object.values(repos);
  }
}

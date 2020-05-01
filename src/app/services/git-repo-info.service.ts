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
    this.info$ = this.infoSubject.asObservable().pipe(
      map((data: any) => {
        let info: Infogit = {
          id: data.id,
          name: data.name,
          full_name: data.full_name,
          is_private: data.is_private,
          created_at: data.created_at,
        };

        return info;
      })
    );

    this.get();
  }

  get() {
    let url = this.endpoint;

    this.http.get(url).subscribe(this.infoSubject);
  }
}

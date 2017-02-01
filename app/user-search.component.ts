import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { UserSearchService } from './user-search.services';
import { User } from './user';

@Component({
  moduleId: module.id,
  selector: 'user-search',
  templateUrl: './templates/user-search.component.html',
  styleUrls: [ './templates/user-search.component.css' ],
  providers: [UserSearchService]
})

export class UserSearchComponent implements OnInit {
  users: Observable<User[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private userSearchService: UserSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.users = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.userSearchService.search(term)
        // or the observable of empty users if there was no search term
        : Observable.of<User[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<User[]>([]);
      });
  }
  gotoDetail(user: User): void {
    let link = ['/user', user.id];
    this.router.navigate(link);
  }
}
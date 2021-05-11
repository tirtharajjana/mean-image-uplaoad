import { Profile } from './../models/Profile';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: Profile[] = [];
  private profiles$ = new Subject<Profile[]>();
  readonly url = "http://localhost:3000/api/profiles";

  constructor(private http: HttpClient) { }

  getProfiles() {
    this.http.get<{ profiles: Profile[] }>(this.url).pipe(
      map((profileData) => {
        return profileData.profiles;
      })
    ).subscribe((profiles) => {
      this.profiles = profiles;
      this.profiles$.next(this.profiles);
    })
  }

  getProfilesStream() {
    return this.profiles$.asObservable();
  }
}

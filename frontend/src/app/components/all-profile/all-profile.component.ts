import { Profile } from './../../models/Profile';
import { ProfileService } from './../../services/profile.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-profile',
  templateUrl: './all-profile.component.html',
  styleUrls: ['./all-profile.component.css']
})
export class AllProfileComponent implements OnInit, OnDestroy {
  profiles: Profile[] = [];
  private profileSubscription: Subscription;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.getProfiles();
    this.profileSubscription = this.profileService.getProfilesStream().subscribe((profiles: Profile[]) => {
      this.profiles = profiles;
    })
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}

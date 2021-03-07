import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/shared/models/profile';
import { ProfileService } from 'src/app/shared/services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService
      .getFullProfile()
      .then((profile: Profile) => {
        this.profile = profile;
        console.log(this.profile);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  getFontAwesomeIcon(iconClassStr) {
    return iconClassStr.replace(/far|fab|fas/gi, '');
  }
}

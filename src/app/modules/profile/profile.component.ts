import { Component, OnInit } from '@angular/core';
import { Profile } from 'src/app/shared/models/profile';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { BlogsService } from 'src/app/shared/services/blogs.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile: Profile;
  panelOpenState = true;
  counter: any;
  headlines: any;
  blogs: any;
  constructor(
    private profileService: ProfileService,
    private blogsService: BlogsService
  ) {}

  ngOnInit(): void {
    this.counter = {
      customers: 28,
      projects: 36,
      repos: 84,
      certificates: 2,
    };
    this.headlines = [
      'NodeJS Full Stack Engineer',
      'Skilled Engineering Manager / Principal Engineer'
      'A Freelancer with DevOps Skills',
      '10+ Years Experiance in Full Stack Domain',
      'Hybrid Mobile App Developer',
    ];
    this.profileService
      .getFullProfile()
      .then((profile: Profile) => {
        this.profile = profile;
        console.log(this.profile);
      })
      .catch((err) => {
        console.error(err);
      });

    this.blogsService.getTopBlogs().then((blogsData: any) => {
      this.blogs = blogsData?.data?.user?.publication?.posts;
    });
  }
  getFontAwesomeIcon(iconClassStr) {
    return iconClassStr.replace(/far|fab|fas/gi, '');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profile } from './../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  profileUrl: string = './../data/profile.json';

  constructor(private httpClient: HttpClient) {}

  async getFullProfile() {
    try {
      let profileJSON = await this.httpClient.get(this.profileUrl).toPromise();
      return new Profile(profileJSON);
    } catch (ex) {
      throw new Error('Unable to fetch profile, Please try again later');
    }
  }
}

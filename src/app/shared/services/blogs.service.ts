import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  constructor(private apollo: Apollo) {}

  async getTopBlogs() {
    try {
      return await this.apollo
        .query<any>({
          query: gql`
            {
              user(username: "shashibadhuk") {
                publication {
                  posts(page: 0) {
                    title
                    brief
                    slug
                    dateAdded
                    coverImage
                    followersCount
                    totalReactions
                  }
                }
              }
            }
          `,
        })
        .toPromise();
    } catch (ex) {
      throw new Error('Unable to fetch blogs, Please try again later');
    }
  }
}

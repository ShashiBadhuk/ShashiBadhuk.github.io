export class MajorSkill {
  skillType: string;
  skillLabel: string;
  skillValue: number;
  constructor(skill: any) {
    this.skillType = skill.type;
    this.skillLabel = skill.label;
    this.skillValue = skill.value;
  }
}
export class SocialAccount {
  accountType: string;
  accountLabel: string;
  accountIcon: string;
  profileId: string;
  profileLink: string;
  constructor(account: any) {
    this.accountType = account.type;
    this.accountLabel = account.label;
    this.accountIcon = account.icon;
    this.profileId = account.profileId;
    this.profileLink = account.profileLink;
  }
}

export class ProfileItem {
  itemType: string;
  itemLabel: string;
  itemIcon: string;
  itemValue: string;
  constructor(bioItem: any) {
    this.itemType = bioItem.type;
    this.itemLabel = bioItem.label;
    this.itemIcon = bioItem.icon;
    this.itemValue = bioItem.value;
  }
}

export class Profile {
  name: string;
  title: string;
  imageUrl: string;
  shortBio: ProfileItem[];
  socialAccounts: SocialAccount[];
  majorSkills: MajorSkill[];
  constructor(profileData) {
    this.name = profileData.name;
    this.title = profileData.title;
    this.imageUrl = profileData.imageUrl;
    if (profileData.shortBio && profileData.shortBio.length > 0) {
      this.shortBio = profileData.shortBio.map(
        (bioItem: any) => new ProfileItem(bioItem)
      );
    }
    if (profileData.socialAccounts && profileData.socialAccounts.length > 0) {
      this.socialAccounts = profileData.socialAccounts.map(
        (account: any) => new SocialAccount(account)
      );
    }
    if (profileData.majorSkills && profileData.majorSkills.length > 0) {
      this.majorSkills = profileData.majorSkills.map(
        (skill: any) => new MajorSkill(skill)
      );
    }
  }
}

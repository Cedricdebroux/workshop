export class User {

  constructor(public firstname: string,
              public lastname: string,
              public email: string,
              public description: string,
              public dateBith: string,
              public aliases?: string[],
              ) {

  }
}

export class Connect {

    /*private static hostUrl = 'http://aehome.ddnsthailand.com/smart/doctor'; */
    private static hostUrl = 'http://localhost/smart/doctor';
    public static readonly USER_TOKEN = 'user_token';
    static getHostUrl():string {
      return this.hostUrl;
    }
  }
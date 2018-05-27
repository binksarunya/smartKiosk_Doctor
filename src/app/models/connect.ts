export class Connect {
<<<<<<< HEAD
=======
   /* private static hostUrl = 'http://aehome.ddnsthailand.com/smart/doctor'; */
>>>>>>> e2c7ba452caec7a41ff2a4fdd38f77fa341ad1bf
    private static hostUrl = 'http://localhost/smart/doctor';
    public static readonly USER_TOKEN = 'user_token';
    static getHostUrl():string {
      return this.hostUrl;
    }
  }
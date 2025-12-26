import conf from '../conf/Conf'
import { Client, Account, ID } from 'appwrite'
import { userService } from './Tables';

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name, username }) {
    try {
      let userId = ID.unique();
      const userAccount = await this.account.create({
        userId,
        email,
        password,
        name,
      });
      
      if (userAccount) {
        // Login first to get authenticated session
        // Then create user row in the login method
        return this.login({ email, password, username, name, isNewUser: true });
      }
    } catch (error) {
      console.log("Appwrite AuthService createAccount || userCreation error ::", error);
      throw { message: error.message };
    }
  }

  async login({ email, password, username, name, isNewUser }) {
    try {
      const session = await this.account.createEmailPasswordSession({
        email,
        password,
      });
      
      const user = await this.getCurrentUser();
      
      let userData;
      
      if (isNewUser) {
        userData = await userService.createUser({ 
          userId: user.$id, 
          username, 
          name: name || user.name 
        });
      } else {
        userData = await userService.getUserById(user.$id);
      }
      
      const sessionId = session.$id;
      
      return { userData, sessionId };
    } catch (error) {
      console.log("Appwrite AuthService login error ::", error);
      throw { message: error.message };
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      console.log("Appwrite AuthService logout error ::", error);
      throw { message: error.message };
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Error in getting User ::", error);
      throw { message: error.message };
    }
  }

  async updateEmail({ email, password }) {
    try {
      return await this.account.updateEmail({
        email,
        password,
      });
    } catch (error) {
      console.log("Appwrite AuthService updateEmail error ::", error);
      throw { message: error.message };
    }
  }

  async updateUserName({ name }) {
    try {
      return await this.account.updateName({
        name,
      });
    } catch (error) {
      console.log("Appwrite AuthService updateUserName error ::", error);
      throw { message: error.message };
    }
  }

  async updatePassword({ password }) {
    try {
      return await this.account.updatePassword({
        password,
      });
    } catch (error) {
      console.log("Appwrite AuthService updatePassword error ::", error);
      throw { message: error.message };
    }
  }
}

const authService = new AuthService();

export default authService;


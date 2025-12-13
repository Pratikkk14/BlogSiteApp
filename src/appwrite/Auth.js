import conf from '../conf/conf'
import { Client, Account, ID } from 'appwrite'

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create({
        userId: ID.unique(),
        email,
        password,
        name,
      });
      if (userAccount) {
        return this.login({ email, password });
      }
    } catch (error) {
      console.log("Appwrite AuthService createAccount error ::", error);
      throw { message: error.message };
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession({
        email,
        password,
      });
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


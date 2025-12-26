import conf from "../conf/Conf";
import { Client, ID, Query, TablesDB } from "appwrite";

export class ArticleService {
  client = new Client();
  article;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.article = new TablesDB(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.article.createRow({
        databaseId: conf.databaseId,
        tableId: conf.articleId,
        rowId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      });
    } catch (error) {
      console.log("Appwrite DatabaseService createRow error ::", error);
      throw { message: error.message };
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.article.updateRow({
        databaseId: conf.databaseId,
        tableId: conf.articleId,
        rowId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
        },
      });
    } catch (error) {
      console.log("Appwrite DatabaseService updateRow error ::", error);
      throw { message: error.message };
    }
  }

  async deletePost(slug) {
    try {
      await this.article.deleteRow({
        databaseId: conf.databaseId,
        tableId: conf.articleId,
        rowId: slug,
      });
      return true;
    } catch (error) {
      console.log("Appwrite DatabaseService deleteRow error ::", error);
      throw { message: error.message };
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.article.getRow({
        databaseId: conf.databaseId,
        tableId: conf.articleId,
        rowId: slug,
      });
    } catch (error) {
      console.log("Appwrite DatabaseService getRows error ::", error);
      throw { message: error.message };
    }
  }

  async listArticles() {
    try {
      return await this.article.listRows({
        databaseId: conf.databaseId,
        tableId: conf.articleId,
        queries: [Query.equal("status", "active")],
      });
    } catch (error) {
      console.log("Appwrite DatabaseService listRows error ::", error);
      throw { message: error.message };
    }
  }
}

{
  /*--------------------------------------------------------------------------------------------- */
}

class UserService {
  client = new Client();
  userdb;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);

    this.userdb = new TablesDB(this.client);
  }

  async createUser({ userId, username, name }) {
    try {
      return await this.userdb.createRow({
        databaseId: conf.databaseId,
        tableId: conf.userId,
        rowId: userId,
        data: {
          username,
          firstName: name,
        },
      });
    } catch (error) {
      console.log("Appwrite UserService createUser error ::", error);
      throw { message: error.message };
    }
  }

  async getUserById(userId) {
    try {
      return await this.userdb.getRow({
        databaseId: conf.databaseId,
        tableId: conf.userId,
        rowId: userId,
      });
    } catch (error) {
      console.log("Appwrite UserService getUserById error ::", error);
      throw { message: error.message, code: error.code };
    }
  }

  async updateUser(userId, data) {
    try {
      return await this.userdb.updateRow({
        databaseId: conf.databaseId,
        tableId: conf.userId,
        rowId: userId,
        data,
      });
    } catch (error) {
      console.log("Appwrite UserService updateUser error ::", error);
      throw { message: error.message };
    }
  }

  async deleteUser(userId) {
    try {
      await this.userdb.deleteRow({
        databaseId: conf.databaseId,
        tableId: conf.userId,
        rowId: userId,
      });
      return true;
    } catch (error) {
      console.log("Appwrite UserService deleteUser error ::", error);
      throw { message: error.message };
      return false;
    }
  }
}

const userService = new UserService();

const articleService = new ArticleService();

export { userService, articleService };
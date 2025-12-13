import conf from "../conf/conf"
import { Client, Databases, ID, Query } from 'appwrite';

export class DatabaseService {
  client = new Client();
  database;

  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.database = new Databases(this.client);
  }

  async createPost({title, slug, content, featuredImage, status, userId}) {
    try {
      return await this.database.createDocument({
        databseId: conf.databaseId,
        tableId: conf.tableId,
        documentId: slug,
        data: {
          title,
          content,
          featuredImage,
            status,
            userId
        },
      });
    } catch (error) {
      console.log("Appwrite DatabaseService createDocument error ::", error);
      throw { message: error.message };
    }
  }
    
    async updatePost(slug, {title, content, featuredImage, status}) {
        try {
            return await this.database.updateDocument({
                databaseId: conf.databaseId,
                collectionId: conf.tableId,
                documentId:slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status
                }
            })
        } catch (error) {
            console.log("Appwrite DatabaseService updateDocument error ::", error);
            throw { message: error.message };
        }
    }

    async deletePost(slug) {
        try {
            await this.database.deleteDocument({
                databaseId: conf.databaseId,
                collectionId: conf.tableId,
                documentId: slug
            })
            return true
        } catch (error) {
            console.log("Appwrite DatabaseService deleteDocument error ::", error);
            throw { message: error.message };
            return false
        }
    }

  async getPost(slug) {
    try {
        return await this.database.getDocument({
        databaseId: conf.databaseId,
        collectionId: conf.tableId,
        documentId: slug
      });
    } catch (error) {
      console.log("Appwrite DatabaseService getDocuments error ::", error);
      throw { message: error.message };
    }
  }
    
    async listDocuments() {
        try {
            return await this.database.listDocuments({
                databaseId: conf.databaseId,
                collectionId: conf.tableId,
                queries: [
                    Query.equal('status', 'active')
                ]
            })
        } catch (error) {
            console.log("Appwrite DatabaseService listDocuments error ::", error);
            throw { message: error.message };
        }
    } 
}


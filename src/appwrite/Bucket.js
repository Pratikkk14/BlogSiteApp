import conf from "../conf/Conf";
import { Client, ID, Storage } from "appwrite";

export class BucketService {
    client = new Client();
    storage;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
        this.storage = new Storage(this.client);
    }

    async uploadFile(file) {
        try {
            return await this.storage.createFile({
                bucketId: conf.bucketId,
                fileId: ID.unique(),
            })
        } catch (error) {
            console.log("Appwrite BucketService uploadFile error ::", error);
            throw { message: error.message };
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile({
                bucketId: conf.bucketId,
                fileId: fileId
            })
            return true
        } catch (error) {
            console.log("Appwrite BucketService deleteFile error ::", error);
            throw { message: error.message };
            return false
        }
    }

    async getFilePreview(fileId) {
        try {
            return await this.storage.getFile({
                bucketId: conf.bucketId,
                fileId
            })
        } catch (error) {
            console.log("Appwrite BucketService getFilePreview error ::", error);
            throw { message: error.message };
        }
    }
}
const bucketService = new BucketService();
export default bucketService;
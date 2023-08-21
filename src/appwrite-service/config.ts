import config from "./appwrite-config/config";
import { Account, Client, ID } from "appwrite";
import type { User } from "@/types/Users";

const appwriteClient = new Client();

appwriteClient
  .setEndpoint(config.appwriteUrl)
  .setProject(config.appwriteProjectId);

export const account = new Account(appwriteClient);

export class AppwriteService {
  async createAccount({ name, email, password }: User) {
    try {
      const newAcc = await account.create(ID.unique(), email, password, name);
      if (newAcc) {
        this.login({ email, password });
      } else {
        return newAcc;
      }
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async login({ email, password }: User) {
    try {
      return await account.createEmailSession(email, password);
    } catch (err: any) {
      throw new Error(err);
    }
  }

  async isLoggedIn(): Promise<boolean> {
    try {
      const data = await this.getUserData();
      return Boolean(data);
    } catch (err: any) {
      return false;
    }
  }

  async getUserData() {
    try {
      return await account.get();
    } catch (err: any) {}
    return null;
  }

  async logout() {
    try {
      return await account.deleteSession("current");
    } catch (err: any) {
      throw new Error(err);
    }
  }
}

const appwriteService = new AppwriteService();
export default appwriteService;

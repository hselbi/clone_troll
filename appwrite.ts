import { Client, Account, ID, Databases, Storage } from "appwrite";

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PROJECT_ID_APPWRITE!);

const account = new Account(client);
// const id = new ID(client);
const database = new Databases(client);
const storage = new Storage(client);

export {client, account, ID, database, storage};
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

//check if db url not found
const mongoDBUrl = process.env.BETTER_AUTH_DB_URL as string;
if (!mongoDBUrl) {
  console.log("No url found");
}

const client = new MongoClient(mongoDBUrl);
const db = client.db("bazardor-auth-db");

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  database: mongodbAdapter(db, {
    client,
  }),
});

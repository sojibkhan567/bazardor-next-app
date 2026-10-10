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
  emailAndPassword: {
    enabled: true,
  },

  database: mongodbAdapter(db, {
    client,
  }),
});

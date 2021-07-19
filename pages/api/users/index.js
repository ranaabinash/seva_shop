import db from "../../../src/db";
import tableNames from "../../../db/sources/constants/tableNames";

export default async function handler(req, res) {
  const users = await db.select().from("user");
  res.status(200).json(users);
}

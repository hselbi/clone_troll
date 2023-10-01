import { database } from "@/appwrite";

export const getTodosGroupByColumn = async () => {
  const data = await database.listDocuments(
    '651999266304210f7315',
    '65199944855fe281ace2',
  );
  console.log(data);
};

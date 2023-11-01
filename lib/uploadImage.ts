import { storage, ID } from "@/appwrite";


const uploadImage = async (file: File) => {
  if(!file) return;

  const fileUploaded = await storage.createFile(
    "653e2c7976436278e1b5",
    ID.unique(),
    file
  );
  return fileUploaded;
}

export default uploadImage;
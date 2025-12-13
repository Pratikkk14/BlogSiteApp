const conf = {
  appwriteUrl: import.meta.env.VITE_APPWRITE_ENDPOINT,
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  databaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  tableId: import.meta.env.VITE_APPWRITE_TABLE_ID,
  bucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
  projectName: import.meta.env.VITE_APPWRITE_PROJECT_NAME,
};

export default conf
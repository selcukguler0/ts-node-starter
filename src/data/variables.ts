import dotenv from "dotenv";
dotenv.config();

export const MINIO_ENDPOINT = process.env.NEXT_PUBLIC_MINIO_ENDPOINT as string;
export const MINIO_BUCKET_NAME = process.env.NEXT_PUBLIC_MINIO_BUCKET_NAME as string;
export const MINIO_ACCESS_KEY = process.env.MINIO_ACCESS_KEY as string;
export const MINIO_SECRET_KEY = process.env.MINIO_SECRET_KEY as string;
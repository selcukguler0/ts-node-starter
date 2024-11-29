import * as Minio from "minio";
import dotenv from "dotenv";
import { MINIO_ACCESS_KEY, MINIO_BUCKET_NAME, MINIO_ENDPOINT, MINIO_SECRET_KEY } from "@/data/variables";

dotenv.config();

export const minioClient = new Minio.Client({
	endPoint: MINIO_ENDPOINT,
	useSSL: true,
	accessKey: MINIO_ACCESS_KEY,
	secretKey: MINIO_SECRET_KEY,
});
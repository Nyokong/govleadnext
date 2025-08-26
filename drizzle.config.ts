import { defineConfig } from "drizzle-kit";

if (!process.env.DATABASE_URL) {
  throw new Error("No database url found / no environment string found");
}

export default defineConfig({
  dialect: "postgresql", // 'mysql' | 'sqlite' | 'turso'
  //   schema: "./db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});

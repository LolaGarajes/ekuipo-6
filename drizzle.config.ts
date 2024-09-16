import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env' });

export default defineConfig({
    schema: './src/lib/database/data.ts',
    out: './migrations',
    dialect: 'sqlite',
    driver: 'turso',
    dbCredentials: {
        url: process.env.TURSO_CONNECTION_URL!,
        authToken: process.env.TURSO_AUTH_TOKEN!, 'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MjU1NjAxNDcsImlkIjoiYjFlOTNkOWQtYjk1OS00MTE2LTk3ZmEtOTg2NjEwN2I3NTFmIn0.KjY6A4dQPjN_GfCi5B8QhP-6PxuiG6chTPg5mCJXSebW7ECaEbuK2YZcr7OJ6t1wJbAiotvloIQWWTiK8W0LBg'
    }
});
import "reflect-metadata";
import { DataSource } from "typeorm";
// import { thread } from "./entities/Threads"

 const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123rahasia",
  database: "db_thread",
  synchronize: true,
  logging: false,
  entities: ["src/entities/*.ts"],
  migrations: ["src/migrations/*.ts"],
  subscribers: [],
});


export default AppDataSource
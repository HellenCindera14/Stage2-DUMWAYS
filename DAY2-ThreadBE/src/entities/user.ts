import { Thead } from "@chakra-ui/react";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Threads } from "./Threads";
import { replies } from "./replies";
import { Likes } from "./likes";
import { follows } from "./follows";

@Entity({ name: "user" })
export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  picture: string;

  @Column()
  Deskription: string;

  //untuk menyambungkan ke database
  @OneToMany(() => Threads, (thread) => thread.user, {
    onDelete: "CASCADE",
  })
  threads: Threads[];
  replies: any;
  likes: any;

}

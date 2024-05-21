import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarURL: "https://github.com/joneskleber.png",
      name: "Jones Kleber",
      role: "CEO @Visão On",
    },
    content: [
      { type: "paragraph", content: "Fala galera 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2024-05-17 08:06:10"),
  },
  {
    id: 2,
    author: {
      avatarURL: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "sdafasdf👋" },
      {
        type: "paragraph",
        content: "sdfasd 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2024-05-10 08:06:10"),
  },
  {
    id: 3,
    author: {
      avatarURL: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "👋" },
      {
        type: "paragraph",
        content: "Acadcsaf 🚀",
      },
      {
        type: "link",
        content: "jane.design/antonella",
      },
    ],
    publishedAt: new Date("2024-05-19 08:06:10"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        {/* SIDEBAR */}
        <Sidebar />

        {/* POST */}
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}

import Link from "next/link";
import styles from './page.module.css'

async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const post = await res.json();
  return post;
}

export default async function PostsLayout({ children }) {
  const posts = await getPosts();
  return (
    <div className={styles.grid}>
      <aside className={styles.posts}>
        <h1>All Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className={styles.post}>{children}</div>
    </div>
  );
}

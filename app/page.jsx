import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/posts">Posts</Link>
        </h1>
      </main>
    </div>
  )
}

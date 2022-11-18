import Link from "next/link";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <Link href="/">Next Posts</Link>
          <nav>
            <Link href="/posts">Posts</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}

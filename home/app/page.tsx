import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen py-0 px-2 flex flex-col items-center justify-center">
      <Head>
        <title>Next.js Blog With Multi Zones</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="py-16 px-0 flex flex-1 flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-center m-0">
          Welcome to{" "}
          <Link href="/" className="text-blue-600 hover:underline">
            Home!
          </Link>
        </h1>

        <div className="max-w-4xl mt-12 flex flex-wrap items-center justify-center gap-6">
          <a
            href="/blog"
            className="p-6 text-left border border-gray-200 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-colors duration-150 max-w-xs"
          >
            <h2 className="mb-4 text-2xl">Go Blog &rarr;</h2>
            <p className="text-xl">
              Click here and go home on our other Next.js app :D
            </p>
          </a>

          <a
            href="/about"
            className="p-6 text-left border border-gray-200 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-colors duration-150 max-w-xs"
          >
            <h2 className="mb-4 text-2xl">About us &rarr;</h2>
            <p className="text-xl">Click here and go to About Us page!</p>
          </a>

          <a
            href="/blog/posts/hello-hello"
            className="p-6 text-left border border-gray-200 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-colors duration-150 max-w-xs"
          >
            <h2 className="mb-4 text-2xl">Go to Hello post &rarr;</h2>
            <p className="text-xl">Click here and go to the Hello Hello post</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mahakaal AI Studio</title>
        <meta
          name="description"
          content="Create AI Images, Videos, and Art with Mahakaal AI Studio — the creative power of AI."
        />
      </Head>

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          Mahakaal AI Studio
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl text-center">
          Generate stunning AI Images, Text-to-Video clips, and more — all powered by the Mahakaal Creative Hub.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-2xl font-semibold">
            Generate Image
          </button>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl font-semibold">
            Text to Video
          </button>
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-2xl font-semibold">
            Subscribe
          </button>
        </div>

        <footer className="mt-16 text-sm text-gray-500">
          © {new Date().getFullYear()} Mahakaal AI Studio. All rights reserved.
        </footer>
      </main>
    </>
  );
}
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mahakaal AI Studio</title>
        <meta
          name="description"
          content="Create AI Images, Videos, and Art with Mahakaal AI Studio — the creative power of AI."
        />
      </Head>

      <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
          Mahakaal AI Studio
        </h1>

        <p className="text-lg text-gray-300 max-w-2xl text-center">
          Generate stunning AI Images, Text-to-Video clips, and more — all powered by the Mahakaal Creative Hub.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-2xl font-semibold">
            Generate Image
          </button>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-2xl font-semibold">
            Text to Video
          </button>
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-2xl font-semibold">
            Subscribe
          </button>
        </div>

        <footer className="mt-16 text-sm text-gray-500">
          © {new Date().getFullYear()} Mahakaal AI Studio. All rights reserved.
        </footer>
      </main>
    </>
  );
            }

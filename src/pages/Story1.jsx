import { Link } from "react-router";

export default function Story1() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-[30px] shadow-2xl border border-pink-200 p-8 md:p-12 text-center">

        <div className="text-6xl">
          🌸
        </div>

        <h1 className="mt-6 text-3xl md:text-5xl font-bold text-pink-600">
          একটা ছোট্ট গল্প...
        </h1>

        <p className="mt-8 text-lg md:text-2xl leading-10 text-gray-700">

          প্রথম যেদিন তোমাকে দেখেছিলাম...

          <br /><br />

          তখন ভাবিনি...

          <br />

          একটা মানুষকে এত সুন্দরও লাগতে পারে।

          😊❤️

        </p>

        <div className="mt-12">

          <Link
            to="/story2"
            className="btn btn-primary rounded-full px-10"
          >
            এরপর ➜
          </Link>

        </div>

      </div>

    </div>
  );
}
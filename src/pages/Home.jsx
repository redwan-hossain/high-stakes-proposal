import { Link } from "react-router";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">

      <div className="max-w-xl text-center">

        <h1 className="text-5xl font-bold text-pink-600 animate-bounce">
          💖 একটা গুরুত্বপূর্ণ কথা ছিল...
        </h1>

        <p className="mt-8 text-xl leading-10 text-black">
          আজকে তোমাকে একটা প্রশ্ন করবো।
          <br />
          কিন্তু উত্তর দেওয়ার আগে...
          <br />
          <span className="font-bold text-red-500">
            পালিয়ে যেও না কিন্তু! 😅
          </span>
        </p>

        <div className="mt-10">
          <Link
            to="/proposal"
            className="btn btn-primary btn-lg rounded-full"
          >
            শুরু করি ❤️
          </Link>
        </div>

      </div>

    </div>
  );
}
import { Link } from "react-router";

export default function Story3() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-[30px] shadow-2xl border border-pink-200 p-8 md:p-12 text-center">

        <div className="text-6xl">
          ❤️
        </div>

        <h1 className="mt-6 text-3xl md:text-5xl font-bold text-pink-600">
          তাই...
        </h1>

        <p className="mt-8 text-lg md:text-2xl leading-10 text-gray-700">

          অনেক সাহস করে...

          <br /><br />

          আজকে তোমাকে একটা প্রশ্ন করলাম।

          <br /><br />

          আশা করি...

          উত্তরটা হবে...

          <span className="font-bold text-pink-600">

            ❤️ "হ্যাঁ"

          </span>

        </p>

        <div className="mt-12">

          <Link
            to="/accept"
            className="btn btn-success rounded-full px-10"
          >
            💖 শেষ উত্তর
          </Link>

        </div>

      </div>

    </div>
  );
}
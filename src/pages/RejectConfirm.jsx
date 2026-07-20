import { Link, useNavigate } from "react-router";
import MovingButton from "../components/MovingButton";

export default function RejectConfirm() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-md md:max-w-2xl rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-pink-200 p-6 md:p-10">

        <div className="text-center">

          <div className="text-6xl">
            🥺
          </div>

          <h1 className="mt-5 text-3xl md:text-5xl font-bold text-pink-600">
            আরে দাঁড়াও...
          </h1>

          <p className="mt-8 text-lg md:text-2xl leading-10 text-gray-700">

            এত কষ্ট করে <span className="font-bold text-red-500">"না"</span> চাপতেই হবে?

            <br /><br />

            একবার আরেকটু ভেবে দেখো না...

            <br />

            আমি কিন্তু এখনও অপেক্ষা করছি।
            ❤️

          </p>

        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/proposal"
            className="btn btn-success rounded-full flex-1"
          >
            ❤️ আচ্ছা, আরেকবার ভাবি
          </Link>

          {/* <button
            onClick={() => navigate("/last-chance")}
            className="btn btn-error rounded-full flex-1"
          >
            💔 না, আমি নিশ্চিত
          </button> */}

          <div className="relative w-44 h-20">

            <MovingButton
              onReject={() => navigate("/last-chance")}
            />

          </div>

        </div>

      </div>

    </div>
  );
}
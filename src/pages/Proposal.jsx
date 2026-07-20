import { Link, useNavigate } from "react-router";
import MovingButton from "../components/MovingButton";

export default function Proposal() {
  const navigate = useNavigate();


  const escapeHandler = () => {
    //
  };

  const rejectHandler = () => {
    navigate("/reject-confirm");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-100 to-purple-100 flex items-center justify-center px-4 py-8">

      <div className="relative w-full max-w-md md:max-w-2xl bg-white/80 backdrop-blur-lg rounded-[30px] shadow-2xl border border-pink-200 p-6 md:p-10">

        <div className="text-center">

          <div className="text-5xl mb-4">
            💖
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-pink-600 leading-tight">
            তুমি কি আমার
            <br />
            জীবনের Special মানুষ হবে?
          </h1>

          <p className="mt-6 text-gray-700 text-base md:text-xl leading-8">
            অনেক ভেবে উত্তর দিও...
            <br />
            কারণ এই উত্তরটাই আমার জন্য অনেক গুরুত্বপূর্ণ। 🥹
          </p>

        </div>

        {/* Buttons */}

        <div className="mt-12 flex justify-center items-center gap-4 md:gap-8">

          <Link
            to="/story1"
            className="btn btn-success rounded-full w-36 md:w-44"
          >
            ❤️ অবশ্যই
          </Link>

          <div className="relative w-44 md:w-52 h-24">

            <MovingButton
              onEscape={escapeHandler}
              onReject={rejectHandler}
            />

          </div>

        </div>

        <div className="mt-10 text-center">

          <p className="text-sm md:text-base text-gray-500 italic">
            🌸
            <br />
            একটু ভেবে উত্তর দিও...
            <br />
            আমি কিন্তু অপেক্ষা করছি...
          </p>

        </div>

      </div>

    </div>
  );
}
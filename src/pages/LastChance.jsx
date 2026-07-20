import { useNavigate } from "react-router";
// import    from "../components/MovingButton";
import LastChanceButton from "../components/LastChanceButton";


export default function LastChance() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">

      <div className="w-full max-w-md md:max-w-2xl rounded-3xl bg-white/80 backdrop-blur-xl border border-pink-200 shadow-2xl p-6 md:p-10">

        <div className="text-center">

          <div className="text-6xl">🥹</div>

          <h1 className="mt-5 text-3xl md:text-5xl font-bold text-pink-600">
            শেষ একটা সুযোগ...
          </h1>

          <p className="mt-8 text-lg md:text-2xl leading-10 text-gray-700">
            সত্যিই কি আমাকে Reject করবে?
            <br /><br />
            🥺
            <br />
            আরেকবার ভেবে দেখো...
            <br />
            আমি কিন্তু এখনও অপেক্ষা করছি।
          </p>

        </div>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-5">

          <button
            onClick={() => navigate("/accept")}
            className="btn btn-success rounded-full w-40"
          >
            ❤️ আচ্ছা, রাজি
          </button>

          <LastChanceButton />

        </div>


      </div>

    </div>
  );
}
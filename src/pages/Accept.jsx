import { Link } from "react-router";

export default function Accept() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-8">

            <div className="relative w-full max-w-md md:max-w-3xl overflow-hidden rounded-3xl bg-white/80 backdrop-blur-xl border border-pink-200 shadow-2xl p-6 md:p-12">

                {/* Floating Emoji */}
                <div className="absolute left-5 top-5 text-3xl animate-bounce">
                    ❤️
                </div>

                <div className="absolute right-6 top-8 text-2xl animate-pulse">
                    💖
                </div>

                <div className="absolute bottom-6 left-8 text-2xl animate-bounce">
                    🌸
                </div>

                <div className="absolute bottom-8 right-8 text-3xl animate-pulse">
                    💕
                </div>

                <div className="text-center">

                    <div className="text-7xl animate-bounce">
                        🎉
                    </div>

                    <h1 className="mt-6 text-3xl md:text-5xl font-bold text-pink-600">
                        ইয়েইই...!!
                    </h1>

                    <h2 className="mt-4 text-2xl md:text-4xl font-bold text-rose-500">
                        তুমি রাজি হয়ে গেছো ❤️
                    </h2>

                    <p className="mt-8 text-lg md:text-2xl leading-10 text-gray-700">

                        আজকের দিনটা আমার জন্য
                        <br />
                        অনেক Special হয়ে থাকবে।

                        <br />
                        <br />

                        ধন্যবাদ...
                        <br />

                        আমার Proposal Accept করার জন্য।

                        🥹❤️

                    </p>

                    <div className="mt-10">

                        <div className="badge badge-success badge-lg p-5 text-white">
                            💍 New Journey Begins
                        </div>

                    </div>

                    <div className="mt-10 space-y-3">

                        <p className="text-lg text-pink-600 font-semibold">
                            💖 আজ থেকে...
                        </p>

                        <p className="text-gray-600 text-base md:text-lg">
                            আমাদের গল্পের নতুন অধ্যায় শুরু হলো...
                        </p>

                    </div>

                    <div className="mt-12">

                        <Link
                            to="/"
                            className="btn btn-primary rounded-full px-8"
                        >
                            🏠 আবার শুরু করি
                        </Link>

                    </div>

                </div>

            </div>

        </div>
    );
}
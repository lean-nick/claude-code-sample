import { useEffect, useState } from "react";
import { Search } from "~/ui/components/search";
import { TrustBadges } from "~/ui/components/trust-badges";
import { Background } from "~/ui/components/background";

export const HomePage = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    return (
        <div className="relative">
            {/* Hero Section */}
            <div className="relative min-h-screen bg-gradient-to-b from-transparent to-slate-900 overflow-hidden">
                <Background />

                {/* Content Container */}
                <div className="relative z-10 min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto space-y-6">
                        {/* Badge */}
                        <div className={`transform transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
                                Over 1000+ Destinations Available
                            </span>
                        </div>

                        {/* Main Heading */}
                        <h1
                            className={`text-white text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 transform transition-all duration-700 delay-100 [text-shadow:0_2px_4px_rgba(0,0,0,0.2)] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            Discover Your Perfect Getaway
                        </h1>

                        {/* Description */}
                        <p
                            className={`text-lg sm:text-xl text-white transform transition-all duration-700 delay-200 [text-shadow:0_1px_2px_rgba(0,0,0,0.1)] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                        >
                            Find and book your dream destination with exclusive deals and personalized recommendations
                        </p>

                        {/* Search Component */}
                        <div className={`transform transition-all duration-700 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            <Search />
                        </div>

                        {/* Trust Badges */}
                        <div className={`transform transition-all duration-700 delay-400 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                            <TrustBadges />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
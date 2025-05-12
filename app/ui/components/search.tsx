import { Search as SearchIcon, MapPin } from "lucide-react";
import { Button } from "~/ui/elements/button";

export const Search = () => {
    return (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg w-full max-w-3xl mx-auto [animation:fade-up_0.5s_ease-out_forwards] [animation-delay:400ms]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="col-span-1 md:col-span-2">
                    <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-rose-600" size={20} />
                        <input
                            type="text"
                            placeholder="Where to?"
                            className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/20 border border-white/10 focus:border-rose-600 focus:ring-1 focus:ring-rose-600 outline-none transition-colors text-white placeholder:text-white/70"
                        />
                    </div>
                </div>
                <div>
                    <Button
                        variant="destructive"
                        className="w-full h-[46px] bg-rose-600 hover:bg-rose-500"
                    >
                        <SearchIcon className="mr-2" size={20} />
                        Search
                    </Button>
                </div>
            </div>
        </div>
    );
};


import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import BlurCircle from "./BlurCircle";
import { PlayCircleIcon } from "lucide-react";

const TrailerSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        Trailers
      </p>

      <div className="relative mt-6 max-w-[960px] mx-auto">
        <BlurCircle top="-100px" right="-100px" />

        {!playing ? (
          <div
            className="relative cursor-pointer group"
            onClick={() => setPlaying(true)}
          >
            <img
              src={currentTrailer.image}
              alt="trailer preview"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircleIcon
                strokeWidth={1.5}
                className="w-20 h-20 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
              />
            </div>
          </div>
        ) : (
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              src={`${currentTrailer.videoUrl}?autoplay=1&mute=1&rel=0`}
              title="YouTube Trailer"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-lg"
            />
          </div>
        )}
      </div>

      <div className="group grid grid-cols-4 gap-4 md:gap-8 mt-8 max-w-3xl mx-auto">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className="relative group-hover:not-hover:opacity-50 hover:-translate-y-1 duration-300 transition cursor-pointer"
            onClick={() => {
              setCurrentTrailer(trailer);
              setPlaying(true); // 🔥 direct play
            }}
          >
            <img
              src={trailer.image}
              alt="trailer"
              className="rounded-lg w-full h-full object-cover brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute top-1/2 left-1/2 w-6 h-6 md:w-10 md:h-10 -translate-x-1/2 -translate-y-1/2 text-white"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailerSection;

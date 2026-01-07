import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// dummy data (abhi backend nahi padha hai isliye)
import { dummyDateTimeData, dummyShowsData } from "../assets/assets";

// reusable components
import BlurCircle from "../components/BlurCircle";
import DateSelect from "../components/DateSelect";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";

// icons
import { Heart, PlayCircleIcon, StarIcon } from "lucide-react";

// helper function (runtime ko hours/min me convert karta hai)
import timeFormat from "../lib/timeFormat";

const MovieDetails = () => {
  // URL se movie id nikal rahe hain
  const { id } = useParams();

  // page navigation ke liye
  const navigate = useNavigate();

  // poora movie + date data yahan store hoga
  const [show, setShow] = useState(null);

  // dummy data se required movie nikalna
  const getShow = async () => {
    // jis movie ka id URL se aaya hai, wahi find kar rahe hain
    const show = dummyShowsData.find(
      (show) => show._id === id
    );

    // agar movie mil gayi
    if (show) {
      // show state ka structure set kar rahe hain
      setShow({
        movie: show,                // movie details
        dateTime: dummyDateTimeData // available dates
      });
    }
  };

  // page load hone par ya id change hone par data load karo
  useEffect(() => {
    getShow();
  }, [id]);

  // jab tak data load nahi hota → Loading dikhao
  return show ? (
    <div className="px-6 md:px-16 lg:px-40 pt-30 md:pt-50">

      {/* ================= MOVIE INFO SECTION ================= */}
      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">

        {/* Movie poster */}
        <img
          src={show.movie.poster_path}
          alt=""
          className="max-md:mx-auto rounded-xl h-104 max-w-70 object-cover"
        />

        {/* Right side: movie details */}
        <div className="relative flex flex-col gap-3">

          {/* background blur (sirf design ke liye) */}
          <BlurCircle top="-100px" left="-100px" />

          <p className="text-primary">ENGLISH</p>

          {/* Movie title */}
          <h1 className="text-4xl font-semibold max-w-96 text-balance">
            {show.movie.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 text-gray-300">
            <StarIcon className="w-5 h-5 text-primary fill-primary" />
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>

          {/* Movie overview */}
          <p className="text-gray-400 mt-2 text-sm leading-tight max-w-xl">
            {show.movie.overview}
          </p>

          {/* Runtime · Genres · Release Year */}
          <p>
            {timeFormat(show.movie.runtime)} ●{" "}
            {show.movie.genres.map((genre) => genre.name).join(", ")} ●{" "}
            {show.movie.release_date.split("-")[0]}
          </p>

          {/* Action buttons */}
          <div className="flex items-center gap-4 mt-4 flex-wrap">

            {/* Trailer button (UI only) */}
            <button
              className="flex gap-2 items-center px-7 py-3 text-sm bg-gray-800
              hover:bg-gray-900 transition rounded-md font-medium cursor-pointer
              active:scale-95"
            >
              <PlayCircleIcon className="w-5 h-5" />
              Watch Trailer
            </button>

            {/* Buy Tickets → DateSelect section pe scroll */}
            <a
              href="#dateSelect"
              className="bg-primary hover:bg-primary-dull px-10 py-3
              transition rounded-md font-medium cursor-pointer active:scale-95"
            >
              Buy Tickets
            </a>

            {/* Favorite icon (logic baad me aayega) */}
            <button
              className="bg-gray-700 p-2.5 rounded-full transition
              cursor-pointer active:scale-95"
            >
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= CAST SECTION ================= */}
      <p className="font-medium text-xl mt-20">Your Favorite Cast</p>

      <div className="overflow-x-auto no-scrollbar mt-8 pb-4">
        <div className="flex items-center gap-4 w-max px-4">

          {/* Top 12 cast members */}
          {show.movie.casts.slice(0, 12).map((cast, index) => (
            <div
              key={index}
              className="text-center items-center flex flex-col"
            >
              <img
                src={cast.profile_path}
                alt=""
                className="rounded-full h-20 aspect-square object-cover"
              />
              <p className="font-medium text-xs mt-3">{cast.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DATE SELECT ================= */}
      <DateSelect dateTime={show.dateTime} id={id} />

      {/* ================= RELATED MOVIES ================= */}
      <p className="text-lg font-medium mt-20 mb-8">
        You May Also Like
      </p>

      <div className="flex flex-wrap gap-8 max-sm:justify-center">
        {dummyShowsData.slice(0, 4).map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>

      {/* ================= SHOW MORE ================= */}
      <div className="flex justify-center mt-20">
        <button
          onClick={() => {
            navigate("/movies");
            scrollTo(0, 0);
          }}
          className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull
          transition rounded-md font-medium cursor-pointer"
        >
          Show more
        </button>
      </div>
    </div>
  ) : (
    // data load hone tak spinner
    <Loading />
  );
};

export default MovieDetails;

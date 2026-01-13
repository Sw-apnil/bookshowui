import React from "react";
import MovieCard from "../components/MovieCard";
import BlurCircle from "../components/BlurCircle";
import { dummyShowsData } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Favorite = () => {
  const { favoriteMovies } = useAppContext();
 // console.log("favoriteMovies from context:", favoriteMovies);
  return favoriteMovies.length > 0 ? (
    <div className="overflow-hidden relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44">
      <BlurCircle top="150px" left="0" />
      <BlurCircle bottom="50px" right="50px" />
      <h1 className="my-4 text-lg font-medium">Your Favorite Movies</h1>
      {/* <div className="grid grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-center gap-4"> */}
      <div className="flex flex-wrap gap-8 max-sm:justify-center">
        {favoriteMovies.map((movie) => (
          <MovieCard movie={movie} key={movie._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-center">No Movies Available</h1>
    </div>
  );
};

export default Favorite;
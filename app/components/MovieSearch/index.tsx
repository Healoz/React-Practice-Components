"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import LoadingIndicator from "@/app/common/LoadingIndicator";
import { AnimatePresence, motion } from "framer-motion";

// User Story:

// As a user, I want to search for movies by title so that I can quickly find information about a film I'm interested in.

// Acceptance criteria:

// User can type a movie title into a search bar
// Results display as the user searches or on submit
// Each result shows the movie title, release year, and poster
// If no results are found, a friendly message is shown
// On hover of movie, display name and year. have cool mouse hover affect that shows the name and title on the mouse cursor in a circle

type Movie = {
  id: string;
  name: string;
  year: string;
  poster: string;
};

const MovieSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [brokenPosters, setBrokenPosters] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const noMoviesFound =
    movies.length === 0 && searchText.length > 0 && !isLoading && !isTyping;

  useEffect(() => {
    setIsTyping(true);

    const timeout = setTimeout(async () => {
      if (searchText) {
        setIsTyping(false);
        setIsLoading(true);
        setBrokenPosters(new Set());
        try {
          const res = await fetch(`/api/movies?query=${searchText}`);
          const data = await res.json();
          if (data.Response === "False") {
            setMovies([]);
            return;
          }

          const search = data.Search;
          console.log("search results: ", search);
          setMovies(
            search.map((m: any) => ({
              id: m.imdbID,
              name: m.Title,
              year: m.Year,
              poster: m.Poster,
            })),
          );
        } finally {
          setIsLoading(false);
        }
      } else {
        setIsTyping(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchText]);

  useEffect(() => {
    console.log("movies updated with:", movies);
    console.log("broken posters: ", brokenPosters);
  }, [movies, brokenPosters]);

  return (
    <section className={styles.container}>
      <h2>Movie Search</h2>
      <div className={styles.searchBar}>
        <input
          type="text"
          name="search-bar"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <AnimatePresence>
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <LoadingIndicator />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!noMoviesFound ? (
        <motion.div
          className={styles.movieGrid}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {movies.map((movie, i) => (
            <div className={styles.cellContainer} key={movie.id}>
              <motion.div
                className={styles.movieCell}
                initial={{ y: "-105%" }}
                viewport={{ once: true, margin: "0px 0px 500px 0px" }}
                whileInView={{
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: i * 0.05 + 0.2,
                    ease: [0.33, 1, 0.68, 1],
                  },
                }}
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.2,
                    ease: [0.33, 1, 0.68, 1],
                    type: "tween",
                  },
                }}
              >
                {movie.poster === "N/A" || brokenPosters.has(movie.id) ? (
                  <p>{movie.name}</p>
                ) : (
                  <Image
                    src={movie.poster}
                    alt={`Poster for ${movie.name}`}
                    fill
                    onError={() =>
                      setBrokenPosters((prev) => new Set(prev).add(movie.id))
                    }
                  />
                )}
              </motion.div>
            </div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className={styles.noMoviesFound}
          key="no-results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h3>No movies found</h3>
        </motion.div>
      )}
    </section>
  );
};

export default MovieSearch;

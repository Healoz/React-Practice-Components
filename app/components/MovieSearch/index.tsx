"use client";
import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";

// User Story:

// As a user, I want to search for movies by title so that I can quickly find information about a film I'm interested in.

// Acceptance criteria:

// User can type a movie title into a search bar
// Results display as the user searches or on submit
// Each result shows the movie title, release year, and poster
// If no results are found, a friendly message is shown

const MovieSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (searchText) {
        // fetch movies here
        console.log("searching for:", searchText);
        const res = await fetch(`/api/movies?query=${searchText}`);
        const data = await res.json();
        console.log(data);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchText]);

  return (
    <section className={styles.container}>
      <h2>Movie Search</h2>
      <input
        type="text"
        name="search-bar"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <div className={styles.movieGrid}>
        <div className={styles.movieCell}>
          <Image
            src="https://m.media-amazon.com/images/M/MV5BMTQyMTQyMzEyNF5BMl5BanBnXkFtZTgwMTI1NjI4MDE@._V1_SX300.jpg"
            alt="Movie poster"
            fill
          />
        </div>
        <div className={styles.movieCell}>
          <Image
            src="https://m.media-amazon.com/images/M/MV5BMTQyMTQyMzEyNF5BMl5BanBnXkFtZTgwMTI1NjI4MDE@._V1_SX300.jpg"
            alt="Movie poster"
            fill
          />
        </div>
        <div className={styles.movieCell}>
          <Image
            src="https://m.media-amazon.com/images/M/MV5BMTQyMTQyMzEyNF5BMl5BanBnXkFtZTgwMTI1NjI4MDE@._V1_SX300.jpg"
            alt="Movie poster"
            fill
          />
        </div>
        <div className={styles.movieCell}>
          <Image
            src="https://m.media-amazon.com/images/M/MV5BMTQyMTQyMzEyNF5BMl5BanBnXkFtZTgwMTI1NjI4MDE@._V1_SX300.jpg"
            alt="Movie poster"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default MovieSearch;

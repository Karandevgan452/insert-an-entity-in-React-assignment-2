import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMovie() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    year: "",
    synopsis: "",
    poster: "",
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const handleSubmjt = (event) => {
    event.preventDefault();
    console.log("Movie submitted", movie);
  };
  return (
    <div>
      <h1>Add Movie</h1>
      <form onSubmit={handleChange}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={handleChange}
        ></input>
        <input
          type="text"
          name="director"
          placeholder="Director"
          onChange={handleChange}
        />
        <select name="genre" onChange={handleChange}>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
        <input
          type="number"
          name="year"
          placeholder="Release Year"
          onChange={handleChange}
        />
        <textarea
          name="synopsis"
          placeholder="Synopsis"
          onChange={handleChange}
        />
        <input
          type="url"
          name="poster"
          placeholder="Poster URL"
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddMovie;

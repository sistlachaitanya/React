import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress"; // 1. Import the spinner
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = import.meta.env.VITE_API_KEY;

  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // 2. New loading state

  const getWeatherInfo = async (city) => {
    const response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
    );

    // Professional check: if the city doesn't exist, response.ok will be false
    if (!response.ok) {
      throw new Error("City not found");
    }

    const jsonResponse = await response.json();

    const result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };

    return result;
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false); // Clear previous errors
    setLoading(true); // 3. Start Loading (Spinner on)

    try {
      const newInfo = await getWeatherInfo(city);
      setCity("");
      updateInfo(newInfo);
    } catch (err) {
      console.log(err);
      setError(true); // Handle error if API fails
    } finally {
      setLoading(false); // 4. Stop Loading (Spinner off) - runs always!
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={handleCity}
          required
          error={error}
          helperText={error ? "No such place exists!" : ""}
        />
        <br />
        <br />

        {/* 5. Conditional Button Content */}
        <Button
          variant="contained"
          type="submit"
          disabled={loading} // Prevent double clicking while loading
          style={{ minWidth: "100px" }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Search"}
        </Button>
      </form>
    </div>
  );
}

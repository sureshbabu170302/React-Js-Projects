# Classy Weather App

_Classy Weather_ is a simple and elegant React weather application that allows users to search for a location and get detailed weather information. The app uses the _Open-Meteo API_ to fetch weather data and geolocation information, displaying temperature and weather icons for the selected location.

## Features

- **Location Search**: Users can enter a location to get its current weather data.
- **Weather Details**: Displays weather conditions with icons representing the weather code (e.g., sunny, cloudy, rainy).
- **Temperature Range**: Shows the daily minimum and maximum temperatures.
- **Loading State**: Displays a loading message while the data is being fetched.
- **Flag Representation**: Shows the country flag of the searched location.

## How It Works

The application has two main steps:

1. **Geocoding**: Converts the location name to geographic coordinates (latitude and longitude) using the [Open-Meteo Geocoding API](https://open-meteo.com/en/docs#api-geocoding).
2. **Weather Data**: Fetches the weather data for the given coordinates using the [Open-Meteo Weather Forecast API](https://open-meteo.com/en/docs).

### Weather Icons

Weather conditions are represented using icons based on the [WMO weather codes](https://codes.wmo.int/306/4678).

## Technologies Used

- **React**: Frontend framework for building the user interface.
- **JavaScript**: Core language for logic and DOM manipulation.
- **Open-Meteo API**: Provides weather data and location search functionality.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Basic knowledge of React and JavaScript.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sureshbabu170302/React-Js-Projects.git
   cd classy-weather
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and go to `http://localhost:3000` to view the app.

## Code Structure

- **App Component**: Main component that handles user input and manages the state for location and weather data.
- **Weather Component**: Renders the list of weather data for each day.
- **Day Component**: Represents the weather for a single day with icons, temperature, and date.

## Key Functions

- **getWeatherIcon(wmoCode)**: Returns an icon based on the weather code.
- **convertToFlag(countryCode)**: Converts a country code (ISO) into an emoji flag.
- **formatDay(dateStr)**: Formats a date string to display the day of the week.

## Usage

1. Enter the location name in the search box.
2. Click on the **Get Weather** button.
3. The weather details for the next few days will be displayed, including the daily minimum and maximum temperatures.

## Example API Calls

### Geocoding API

```bash
https://geocoding-api.open-meteo.com/v1/search?name=LOCATION
```

### Weather Forecast API

```bash
https://api.open-meteo.com/v1/forecast?latitude=LATITUDE&longitude=LONGITUDE&timezone=TIMEZONE&daily=weathercode,temperature_2m_max,temperature_2m_min
```

## Customization

You can customize the icons or add more detailed weather data by extending the `getWeatherIcon()` function to handle more weather codes or adding new API parameters.

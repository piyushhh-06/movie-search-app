
# Movie Search App

The Movie Search App is a responsive web application that allows users to search for movies, view detailed information about them, and save their favorite movies. The application uses the TMDb API to fetch movie data and provides a user-friendly interface with a dark theme. It also supports real-time search suggestions and handles user favorites using local storage.


## Features

- Movie Search: Search for movies by title with auto-suggestions.
- Movie Details: View detailed information about a selected movie, including title, release date, synopsis, genre, and ratings.
- Favorites: Save and manage favorite movies using local storage. Remove movies from favorites.
- Responsive Design: The app is designed to work well on mobile, tablet, and desktop devices.


## Technologies Used

- React: JavaScript library for building user interfaces.
- Tailwind CSS: Utility-first CSS framework for styling.
- Axios: Promise-based HTTP client for making API requests.
- TMDb API: The Movie Database API for movie data.
- Lodash: JavaScript utility library for debouncing search requests.
## Installation

1. Clone the repository:

```bash
git clone https://github.com/piyushhh-06/movie-search-app.git
cd movie-search-app

```
2. Install dependencies:

```bash
npm install
# or
yarn install

```
3. Create a .env file in the root directory and add your TMDb API key:

```bash
VITE_TMDB_API_KEY=bf1fde138201ea0f660873946b61266d

```
4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Usage/Examples

- Search for Movies: Use the search bar to find movies by title. Results will be displayed dynamically as you type or when you click the search button.

- View Movie Details: Click on a movie in the search results to view its detailed information, including poster, release date, overview, genres, and ratings.

- Manage Favorites: Click the "Add to Favorites" button on the movie details page to save it to your favorites list. You can view and remove favorite movies from the Favorites page.


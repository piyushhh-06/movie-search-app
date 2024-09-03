
# Movie Search App

The Movie Search App is a responsive web application that allows users to search for movies, view detailed information about them, and save their favorite movies. The application uses the TMDb API to fetch movie data and provides a user-friendly interface with a dark theme. It also supports real-time search suggestions and handles user favorites using local storage.

## Deployement 
https://movie-search-app-drab.vercel.app/
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

## Screenshots

### Desktop View
![Screenshot 2024-08-30 184250](https://github.com/user-attachments/assets/597c8904-801a-45c9-96d6-b36b321307bb)


### Tablet View
![Screenshot 2024-08-30 184325](https://github.com/user-attachments/assets/84724c38-8b16-4ce7-bfb9-81e63a57642a)


### Mobile View
![Screenshot 2024-08-30 184349](https://github.com/user-attachments/assets/9ae81707-7497-434d-b179-c115f494b579)

## API Usage Details

This app uses the TMDb API to fetch movie data. Two main endpoints are utilized:

1. *Search Movies:*
   - *Endpoint:* https://api.themoviedb.org/3/search/movie
   - *Parameters:*
     - query: Movie title or search query
     - language: Language of the results (e.g., en-US)
     - page: Page number of results (default is 1)
     - include_adult: Whether to include adult content (true or false)
     - api_key: Your TMDb API key

2. *Movie Details:*
   - *Endpoint:* https://api.themoviedb.org/3/movie/{movie_id}
   - *Parameters:*
     - movie_id: The ID of the movie
     - language: Language of the details (e.g., en-US)
     - api_key: Your TMDb API key


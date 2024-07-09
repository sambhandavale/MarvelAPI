Overview

This API provides information about movies and shows. It allows users to filter and retrieve data based on various criteria such as title, id, studios, language code, phase, year, and genre. Additionally, it provides specific routes for filtering by phase, year, and Netflix shows.

Movies are structured with the following attributes:

1. type (string): Type of content (movie or show).
2. title (string): Title of the movie, formatted with each word separated by _ and all lowercase.
3. name (string): Full name of the movie.
4. version (string): Version or variant of the movie.
5. id (string): Unique identifier for the movie (mms<serial_number> where m indicates movie, ms is the initials of studios, and <serial_number> is the movie's serial number for that studio).
6. phase (number): Phase number of the movie.
7. year_of_release (number): Year of release.
8. release_date (string): Release date of the movie.
9. genre (array of strings): Genres of the movie.
10. language_code (string): Language code of the movie.
11. language_name (string): Language name of the movie.
12. default_review (string): Default review or summary of the movie.
13. movie_duration (string): Duration of the movie.
14. trailer_link (string): Link to the movie's trailer.
15. watch_now_link (string): Link to watch the movie.
16. description (string): Detailed description of the movie.
17. short_description (string): Short description or summary of the movie.
18. creator (string): Creator or creator's name.
19. director (string): Director of the movie.
20. imdb_rating (number): IMDb rating of the movie.
21. movies_page (number): Movies page identifier.
22. prerequisites (array): Prerequisites for the movie.
23. info_link (string): Link to more information about the movie.
24. studios (array of strings): Studios involved in producing the movie.
25. homepage (number): Homepage identifier.
26. credit_scenes (number): Number of credit scenes in the movie.

Series data is also structured the same way with few more and less properties.


Base URL
http://localhost:5000/api

Movies Routes
GET /api/movies
Query Parameters
title (string): Filter movies by title.
id (string): Filter movies by ID.
studios (string): Filter movies by studios.
language_code (string): Filter movies by language code.
phase (string): Filter movies by phase.
year (string): Filter movies by year of release.
genre (string): Filter movies by genre.
genre and year (string): Filter movies by both genre and year.
genre and phase (string): Filter movies by both genre and phase.
Example Request
GET /api/movies?title=Inception

POST /api/movies/
/
Parameters
movietitle (string): Title of the movie to update.
propertyname (string): Name of the property to add.
Body
JSON object containing { "propertyValue": "value" } where propertyValue is the value to assign to the new property.
Example Request
POST /api/movies/Inception/post_credit

json
Copy code
{
    "propertyValue": 1
}
DELETE /api/movies/
/
Parameters
movietitle (string): Title of the movie to update.
propertyname (string): Name of the property to delete.
Example Request
DELETE /api/movies/Inception/post_credit

Sub Routes
GET /api/movies/id/
Parameters
id (string): Movie ID to retrieve.
Example Request
GET /api/movies/id/1234

GET /api/movies/phase/
Parameters
phase (string): Phase number to filter movies.
Example Request
GET /api/movies/phase/3

GET /api/movies/year/
Parameters
year (string): Year of release to filter movies.
Example Request
GET /api/movies/year/2020

Shows Routes
GET /api/shows
Query Parameters
title (string): Filter shows by title.
id (string): Filter shows by ID.
network (string): Filter shows by network.
genre (string): Filter shows by genre.
year (string): Filter shows by year of release.
network and genre (string): Filter shows by both network and genre.
Example Request
GET /api/shows?title=Stranger Things

GET /api/shows/netflix
Example Request
GET /api/shows/netflix
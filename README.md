# 🎬 Marvel Movie & Show API

<div align="center">
  <p><strong>An API to fetch movie and TV show data with powerful filtering options.</strong></p>
</div>

## 📌 Overview

The **Movie & Show API** allows users to retrieve detailed information about movies and TV shows. It provides filtering options based on various attributes such as title, ID, studios, language, phase, year, and genre. Additionally, it includes specific routes for filtering by phase, year, and Netflix shows.

## 🌍 Base URL

\`\`\`
https://marvel-api-mcu.vercel.app/
\`\`\`

## 🔍 API Endpoints

### 🎬 Movies Routes

#### GET /api/movies
Retrieve movies with optional filters.

**Query Parameters:**
- \`title\` (string): Filter movies by title
- \`id\` (string): Filter movies by ID
- \`studios\` (string): Filter movies by studio
- \`language_code\` (string): Filter movies by language
- \`phase\` (string): Filter movies by phase
- \`year\` (string): Filter movies by year of release
- \`genre\` (string): Filter movies by genre

**Example:**
\`\`\`bash
GET /api/movies?title=inception
\`\`\`

#### POST /api/movies/{movietitle}/{propertyname}
Add a new property to a movie.

**Body Format:**
\`\`\`json
{
  "propertyValue": "value"
}
\`\`\`

**Example:**
\`\`\`bash
POST /api/movies/Inception/post_credit
\`\`\`
\`\`\`json
{
  "propertyValue": 1
}
\`\`\`

#### DELETE /api/movies/{movietitle}/{propertyname}
Remove a property from a movie.

**Example:**
\`\`\`bash
DELETE /api/movies/Inception/post_credit
\`\`\`

### 📺 Shows Routes

#### GET /api/shows
Retrieve shows with optional filters.

**Query Parameters:**
- \`title\` (string): Filter shows by title
- \`id\` (string): Filter shows by ID
- \`network\` (string): Filter shows by network
- \`genre\` (string): Filter shows by genre
- \`year\` (string): Filter shows by year of release

**Example:**
\`\`\`bash
GET /api/shows?title=Stranger%20Things
\`\`\`

#### GET /api/shows/netflix
Retrieve only Netflix shows.

**Example:**
\`\`\`bash
GET /api/shows/netflix
\`\`\`

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| Node.js    | Backend runtime |
| Express.js | Web framework |
| REST API   | API structure for requests & responses |

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a new branch (\`feature-xyz\`)
3. Commit your changes
4. Open a Pull Request
---

<div align="center">
  <strong>🚀 Happy Coding! 🎥</strong>
</div>


# 🎬 Marvel Movie & Show API

<div align="center">
  <img src="/placeholder.svg?height=150&width=150" alt="Movie & Show API Logo" width="150" height="150"/>
  <p><strong>An API to fetch movie and TV show data with powerful filtering options.</strong></p>
</div>

## 📌 Overview

The **Movie & Show API** allows users to retrieve detailed information about movies and TV shows. It provides filtering options based on various attributes such as title, ID, studios, language, phase, year, and genre. Additionally, it includes specific routes for filtering by phase, year, and Netflix shows.

## 🌍 Base URL

\`\`\`
http://localhost:5000/api
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
| MongoDB    | Database for storing movies & shows |
| REST API   | API structure for requests & responses |

## 📦 Installation & Setup

1. **Clone the Repository**
   \`\`\`bash
   git clone https://github.com/your-username/movie-show-api.git
   cd movie-show-api
   \`\`\`

2. **Install Dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Start the Server**
   \`\`\`bash
   npm run dev
   \`\`\`
   Server will start at http://localhost:5000/api

## 📊 System Architecture

<div align="center">
  <img src="/placeholder.svg?height=400&width=600" alt="System Architecture" width="600" height="400"/>
</div>

## 🚀 Deployment

To deploy the API, you can use services like:
- Heroku
- Vercel
- AWS Lambda
- DigitalOcean

## 🤝 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a new branch (\`feature-xyz\`)
3. Commit your changes
4. Open a Pull Request

## 📜 License

This project is licensed under the MIT License.

---

<div align="center">
  <strong>🚀 Happy Coding! 🎥</strong>
</div>


# Movie Explorer Assignment Submission

## Overview
This is a standalone React application (`Movie Explorer`) built independently using AI as a development assistant. It mimics the architecture discussed in Ishak's session by implementing an external API integration (OMDb) within a modern React stack.

## The Prompts Used During Development

To build this application, I used an "explore-plan-code" loop with my AI assistant. Here are the core prompts I used:

1. **Scaffolding:**
   > "I need to build a React application similar to the one in our Flyrank session. Scaffold a new React project using Vite in a folder called `movie-explorer`."

2. **Core Logic & Fetching:**
   > "Write the `App.jsx` component. It should manage a `searchTerm` and a `movies` array using `useState`. Write a `searchMovies` async function that fetches data from `https://www.omdbapi.com/` using a public test key. Handle loading states and errors (e.g., 'Movie not found') gracefully."

3. **Styling & UI Components:**
   > "Extract the movie rendering logic into a `MovieCard` component. Then, generate a premium CSS stylesheet in `index.css`. Use a dark mode aesthetic with glassmorphism for the search bar and movie cards. Ensure the cards are displayed in a responsive grid."

## How AI Assisted Throughout the Implementation

The AI dramatically accelerated the development lifecycle in three main areas:
1. **Boilerplate Generation:** Instead of manually writing the standard `useState` and `useEffect` hooks for API fetching, the AI provided a robust template that included `isLoading` and `error` boundary states out of the box.
2. **CSS Aesthetic:** Achieving a modern "glassmorphism" look (translucency, blur, gradients) requires complex CSS. By explicitly prompting for these aesthetics, the AI generated the exact variables and properties needed, saving me hours of tweaking CSS in the browser inspector.
3. **Best Practices:** The AI automatically added a `loading="lazy"` attribute to the movie posters and structured the `MovieCard` as a separate, clean functional component rather than stuffing everything into `App.jsx`.

## Examples of Manual Improvements and Refactoring

While the AI-generated code was an excellent foundation, I still had to act as the "driver" to refine the code for production. Here are specific manual interventions I performed after reviewing the AI's output:

1. **Edge Case Handling for Missing Images:** 
   * **AI Output:** The AI blindly set `src={movie.Poster}`.
   * **My Correction:** The OMDb API sometimes returns the string `"N/A"` for missing posters. This broke the image rendering. I manually updated the code to use a ternary operator: `src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600?text=No+Poster'}`.

2. **Preventing Empty Searches:**
   * **AI Output:** The AI bound the `handleSearch` function to the form, but it would send API requests even if the search input was blank.
   * **My Correction:** I manually added `if (searchTerm.trim()) { searchMovies(searchTerm); }` to prevent wasting network requests on empty strings.

3. **Semantic HTML Fixes:**
   * **AI Output:** The AI generated a generic `<div className="search-container">` containing the input and button.
   * **My Correction:** I changed the `<div>` to a `<form>` element so that hitting the "Enter" key on the keyboard would automatically trigger the submission event without needing custom keyboard event listeners. 

---
*Developed as part of the Flyrank AI Internship track.*

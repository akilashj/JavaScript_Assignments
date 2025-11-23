'use strict';

const form = document.querySelector('#search-form');

form.addEventListener('submit', async function (evt) {
    evt.preventDefault();


    const query = document.querySelector('#tv-input').value.trim();

    if (query.length === 0) {
        console.log("Please enter a series name.");
        return;
    }

    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
        console.log("Fetching:", url);
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Network error");
        }

        const results = await response.json();

        console.log("Search results:");
        console.log(results);
        console.log("--------------------------------");


        results.forEach((item, i) => {
            console.log(`#${i + 1}: ${item.show.name}`);
            console.log(`Genres: ${item.show.genres.join(', ')}`);
            console.log(`Status: ${item.show.status}`);
            console.log(`Premiered: ${item.show.premiered}`);
            console.log(`URL: ${item.show.url}`);
            console.log("--------------------------------");
        });

    } catch (error) {
        console.error("Error:", error.message);
    }
});

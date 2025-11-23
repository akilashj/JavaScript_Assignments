'use strict';

const form = document.querySelector('#tv-form');

form.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const query = document.querySelector('#query').value;
    if (!query) {
        console.log("Please enter a TV series name!");
        return;
    }

    const apiUrl = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network response was not ok');

        const data = await response.json();

        if (data.length === 0) {
            console.log("No TV series found.");
            return;
        }


        data.forEach((item, index) => {
            console.log(`Result #${index + 1}`);
            console.log(`Name: ${item.show.name}`);
            console.log(`Genres: ${item.show.genres.join(', ')}`);
            console.log(`Status: ${item.show.status}`);
            console.log(`Premiered: ${item.show.premiered}`);
            console.log(`Official site: ${item.show.officialSite || 'N/A'}`);
            console.log('--------------------------------');
        });

    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
});

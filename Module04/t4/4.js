'use strict';

const form = document.querySelector('#search-form');
const resultsDiv = document.querySelector('#results');

const PLACEHOLDER_IMG = 'https://placehold.co/210x295?text=Not%20Found';

form.addEventListener('submit', async function (evt) {
    evt.preventDefault();

    const query = document.querySelector('#tv-input').value.trim();
    if (query.length === 0) {
        console.log("Please enter a series name.");
        return;
    }

    const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network error");

        const results = await response.json();


        resultsDiv.innerHTML = '';

        if (results.length === 0) {
            resultsDiv.innerHTML = '<p>No results found.</p>';
            return;
        }


        results.forEach(item => {
            const tvShow = item.show;


            const article = document.createElement('article');


            const title = document.createElement('h2');
            title.textContent = tvShow.name;
            article.appendChild(title);


            const link = document.createElement('a');
            link.href = tvShow.url || '#';
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = "Show details";
            article.appendChild(link);


            const img = document.createElement('img');
            img.src = (tvShow.image && tvShow.image.medium) ? tvShow.image.medium : PLACEHOLDER_IMG;
            img.alt = tvShow.name || 'No title';
            article.appendChild(img);


            const summaryDiv = document.createElement('div');
            summaryDiv.innerHTML = tvShow.summary || "No summary available.";
            article.appendChild(summaryDiv);


            resultsDiv.appendChild(article);
        });

    } catch (error) {
        console.error("Error:", error.message);
        resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
});

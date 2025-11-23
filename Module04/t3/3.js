'use strict';

const form = document.querySelector('#search-form');
const resultsDiv = document.querySelector('#results');

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


        results.forEach(item => {
            const tvShow = item.show;


            const article = document.createElement('article');


            const title = document.createElement('h2');
            title.textContent = tvShow.name;
            article.appendChild(title);


            const link = document.createElement('a');
            link.href = tvShow.url;
            link.target = '_blank';
            link.textContent = "Show details";
            article.appendChild(link);


            const img = document.createElement('img');
            img.src = tvShow.image?.medium || '';
            img.alt = tvShow.name;
            article.appendChild(img);


            const summaryDiv = document.createElement('div');
            summaryDiv.innerHTML = tvShow.summary || "No summary available.";
            article.appendChild(summaryDiv);


            resultsDiv.appendChild(article);
        });

    } catch (error) {
        console.error("Error:", error.message);
    }
});

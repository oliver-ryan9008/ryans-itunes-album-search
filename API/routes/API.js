const fetch = require('node-fetch');
const baseUrl = `https://itunes.apple.com/`;
const staticConfigParams = '&media=music&entity=album&attribute=artistTerm';
const searchParam = 'search?term='

module.exports = (app) => {

    // POST search
    app.post('/search/:query', (req, res) => {
        const searchString = req.params.query;
        res.redirect(`/search-results/${searchString}`);
    });

    // GET results
    app.get('/search-results/:query', (req, res) => {
        const query = encodeURIComponent(req.params.query);
        const resultsUrl = `${baseUrl}${searchParam}${query}${staticConfigParams}`;
        console.log(`Fetching ${resultsUrl}...`);
        fetch(resultsUrl)
            .then(res => res.json())
            .then(data => {
                res.send({ data });
                console.log(`Success`);
            })
            .catch(err => {
                console.error(err);
            });
    });
};